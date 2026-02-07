import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cricut for Pets | Bandanas, Bowl Labels & Pet Memorial Items',
  description: 'Create personalized pet bandanas, bowl labels, car decals and memorial items with Cricut. Project ideas and tips for pet lovers and Etsy sellers.',
  keywords: ['Cricut pet bandana', 'Cricut dog bowl', 'pet memorial Cricut', 'Cricut pet portrait', 'dog mom decal', 'Cricut pet projects', 'personalized pet items'],
};

export default function PetsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
