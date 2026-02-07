import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Spotlight | Share Your Cricut Projects',
  description: 'Share your Cricut projects and get featured! Submit your creations to the CricutHelper Community Spotlight. All skill levels welcome.',
  keywords: ['Cricut community', 'Cricut projects', 'share Cricut', 'Cricut inspiration', 'craft community'],
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
