import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cricut Project Niches | Cosplay, Weddings, Pets & More',
  description: 'Specialized Cricut guides for different crafting communities. Cosplay props, wedding decor, baby items, pet crafts, cake decorating, and more with settings and tips.',
  keywords: [
    'Cricut projects',
    'Cricut niches',
    'Cricut cosplay',
    'Cricut wedding',
    'Cricut baby',
    'Cricut pets',
    'Cricut cake decorating',
    'Cricut seasonal',
    'Cricut home decor',
  ],
};

export default function NichesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
