# Pro Profit Calculator - Feature Spec

## Overview
Split the existing profit calculator into Free (simple) and Pro (comprehensive) tiers to drive subscription revenue.

## URL Structure
- `/profit-calculator` - Simple free version
- `/profit-calculator/pro` - Pro version (soft paywall)

---

## FREE: Simple Profit Calculator

### Inputs
- Selling price
- Single material cost (combined)
- Labor time (minutes)
- Hourly rate
- Shipping charged vs actual cost
- Marketplace (Etsy only)

### Outputs
- Total profit/loss
- Profit margin %
- Simple breakdown (revenue - costs = profit)
- Suggested price for 30% margin

### Limitations
- No save functionality
- No export
- Single marketplace
- No batch pricing
- No overhead costs

### CTA
- Banner: "Need to save projects, export quotes, or price in bulk? Try Pro free for 7 days →"

---

## PRO: Full Business Pricing Suite

### Advanced Inputs

#### Materials Section
- Add unlimited materials per project
- Each material: name, unit cost, quantity, unit type (each, sq ft, linear ft)
- Material presets (save frequently used materials)
- Quick-add from common materials database

#### Labor Section  
- Multiple labor types with different rates:
  - Design time
  - Cutting time
  - Weeding time
  - Pressing/application time
  - Packaging time
- Default rates (saveable)

#### Overhead Section
- Machine depreciation ($/project or $/month amortized)
- Mat wear ($ per cut)
- Blade wear ($ per cut)
- Electricity estimate
- Software/subscriptions (Cricut Access, etc.)
- Workspace costs (optional)

#### Pricing Section
- Selling price
- Shipping charged
- Actual shipping cost
- Packaging cost
- Waste factor % (materials lost to mistakes)

### All Marketplaces
- Etsy (6.5% + 3% + $0.20)
- Amazon Handmade (15%)
- Shopify (2.9% + $0.30)
- eBay (13.25%)
- Facebook Marketplace (5% or free local)
- Square (2.6% + $0.10)
- Cash/Local (0%)
- Custom (set your own %)

### Pro Features

#### 1. Save Projects
- Save unlimited project calculations
- Name and organize by category
- Edit and update saved projects
- Duplicate projects for variations

#### 2. Batch Pricing
- Enter quantity (e.g., 50 tumblers)
- Auto-calculate:
  - Per-unit cost at volume
  - Bulk material discounts
  - Time savings at scale
  - Volume pricing tiers

#### 3. Export PDF Quotes
- Professional quote template
- Add your business name/logo
- Line-item breakdown
- Valid-until date
- Customer-ready format

#### 4. Multi-Marketplace Comparison
- Side-by-side profit comparison
- "Best marketplace for this product"
- Net profit after all fees

#### 5. Suggested Pricing Engine
- "I want 40% margin" → calculates required price
- "I want to make $15/hour" → calculates required price
- "What's the minimum viable price?" → break-even + 10%

#### 6. Break-Even Calculator
- How many do I need to sell to cover costs?
- At what price do I break even?
- Minimum order quantity for profit

#### 7. Price History
- Track material cost changes over time
- "Your vinyl costs went up 15% since January"
- Alerts when costs significantly change

#### 8. Dashboard
- All saved projects at a glance
- Most profitable items
- Least profitable items
- Average margins by category

---

## Technical Implementation

### Auth System
- Supabase Auth (already in stack)
- Email/password signup
- Google OAuth (optional)
- 7-day free trial (no CC required)

### Subscription System
- Stripe Checkout
- Plans:
  - Monthly: $7/mo
  - Annual: $49/yr (42% off)
- Stripe Customer Portal for management
- Webhook for subscription status

### Database (Supabase)

```sql
-- Users table (extends Supabase auth)
create table profiles (
  id uuid references auth.users primary key,
  email text,
  subscription_status text default 'free', -- free, trial, active, cancelled
  subscription_plan text, -- monthly, annual
  trial_ends_at timestamp,
  subscription_ends_at timestamp,
  stripe_customer_id text,
  created_at timestamp default now()
);

-- Saved projects
create table saved_projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  name text not null,
  category text,
  data jsonb not null, -- full calculator state
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- Material presets
create table material_presets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  name text not null,
  cost decimal not null,
  unit_type text, -- each, sqft, linear_ft
  category text,
  created_at timestamp default now()
);
```

### Soft Paywall UX
1. User can ACCESS pro calculator page
2. User can USE all features during session
3. When user tries to SAVE/EXPORT → paywall modal
4. "Start 7-day free trial" or "Subscribe"
5. After trial/sub → full access

### Components to Build
1. `SimpleCalculator` - streamlined free version
2. `ProCalculator` - full featured version
3. `PaywallModal` - subscription prompt
4. `SubscriptionProvider` - context for sub status
5. `SavedProjectsList` - dashboard of saved projects
6. `PDFQuoteGenerator` - export functionality
7. `MarketplaceComparison` - side-by-side view
8. `PricingEngine` - reverse calculator

---

## Implementation Phases

### Phase 1: Split Calculators (Day 1)
- Create SimpleCalculator component from existing
- Create /profit-calculator/pro route
- Add upgrade CTA to simple version

### Phase 2: Pro Features UI (Day 2-3)
- Build multi-material input
- Build labor breakdown
- Build overhead section
- Build marketplace comparison
- Build suggested pricing engine

### Phase 3: Auth + Subscription (Day 4-5)
- Set up Supabase Auth
- Set up Stripe products/prices
- Build PaywallModal
- Implement subscription check
- Build trial logic

### Phase 4: Save/Export (Day 6-7)
- Implement save to Supabase
- Build saved projects dashboard
- Implement PDF export
- Build material presets

### Phase 5: Polish (Day 8)
- Mobile responsive
- Error handling
- Loading states
- Analytics events

---

## Success Metrics
- Free → Pro trial conversion: 10%+
- Trial → Paid conversion: 30%+
- Monthly churn: <5%
- Target: 200 subscribers = $1,400/mo

---

## Open Questions
1. Do we require CC for free trial? (No = more trials, Yes = higher conversion)
2. Lifetime deal for early adopters? ($149 one-time)
3. Affiliate program for referrals?
