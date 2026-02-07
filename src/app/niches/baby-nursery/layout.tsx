import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cricut for Baby & Nursery | Onesies, Wall Decals & Milestone Blankets',
  description: 'Create baby onesies, nursery wall decals, milestone blankets and more with Cricut. Infant-safe HTV tips and project ideas for new parents and baby shower gifts.',
  keywords: ['Cricut baby', 'Cricut onesie', 'Cricut nursery', 'baby wall decal Cricut', 'milestone blanket Cricut', 'Cricut baby shower', 'infant safe HTV', 'Cricut newborn'],
};

export default function BabyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
