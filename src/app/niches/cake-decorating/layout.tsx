import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cricut for Cake Decorating | Fondant, Gum Paste & Stencil Cutting',
  description: 'Cut fondant, gum paste, wafer paper and cake stencils with your Cricut. Settings, tips, and food-safe practices for cake decorators and cookie artists.',
  keywords: [
    'Cricut cake decorating',
    'Cricut fondant',
    'Cricut gum paste',
    'Cricut cake topper',
    'Cricut cookie stencil',
    'cut fondant Cricut',
    'edible Cricut',
    'Cricut wafer paper',
    'cake stencil Cricut',
    'Cricut cupcake topper',
  ],
};

export default function CakeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
