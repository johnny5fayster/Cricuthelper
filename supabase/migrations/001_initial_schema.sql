-- CricutHelper Database Schema
-- Run this in Supabase SQL Editor

-- Profiles table (extends Supabase auth.users)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text,
  full_name text,
  avatar_url text,
  subscription_status text default 'free' check (subscription_status in ('free', 'trial', 'active', 'cancelled', 'expired')),
  subscription_plan text check (subscription_plan in ('monthly', 'annual')),
  trial_ends_at timestamp with time zone,
  subscription_ends_at timestamp with time zone,
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Saved calculator projects
create table if not exists public.saved_projects (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  name text not null,
  category text,
  data jsonb not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Material presets (user's saved materials)
create table if not exists public.material_presets (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  name text not null,
  cost decimal(10,2) not null,
  unit_type text default 'each' check (unit_type in ('each', 'sqft', 'linear_ft', 'roll')),
  category text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.profiles enable row level security;
alter table public.saved_projects enable row level security;
alter table public.material_presets enable row level security;

-- Profiles policies
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Saved projects policies
create policy "Users can view own projects"
  on public.saved_projects for select
  using (auth.uid() = user_id);

create policy "Users can create own projects"
  on public.saved_projects for insert
  with check (auth.uid() = user_id);

create policy "Users can update own projects"
  on public.saved_projects for update
  using (auth.uid() = user_id);

create policy "Users can delete own projects"
  on public.saved_projects for delete
  using (auth.uid() = user_id);

-- Material presets policies
create policy "Users can view own presets"
  on public.material_presets for select
  using (auth.uid() = user_id);

create policy "Users can create own presets"
  on public.material_presets for insert
  with check (auth.uid() = user_id);

create policy "Users can update own presets"
  on public.material_presets for update
  using (auth.uid() = user_id);

create policy "Users can delete own presets"
  on public.material_presets for delete
  using (auth.uid() = user_id);

-- Function to handle new user creation
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to create profile on user signup
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function to update updated_at timestamp
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Triggers for updated_at
create trigger update_profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.update_updated_at_column();

create trigger update_saved_projects_updated_at
  before update on public.saved_projects
  for each row execute procedure public.update_updated_at_column();

-- Indexes for performance
create index if not exists idx_saved_projects_user_id on public.saved_projects(user_id);
create index if not exists idx_material_presets_user_id on public.material_presets(user_id);
create index if not exists idx_profiles_stripe_customer_id on public.profiles(stripe_customer_id);
