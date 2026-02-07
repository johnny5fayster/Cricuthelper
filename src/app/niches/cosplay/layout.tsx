import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cricut for Cosplay | EVA Foam, Armor, Props & Costume Cutting Guide',
  description: 'Cut EVA foam, Worbla, and thermoplastics with your Cricut Maker for cosplay armor, props, and costumes. Settings, tips, and troubleshooting for cosplay crafters.',
  keywords: [
    'Cricut cosplay',
    'Cricut EVA foam',
    'Cricut armor',
    'Cricut props',
    'EVA foam Cricut settings',
    'Worbla Cricut',
    'cosplay Cricut Maker',
    'cut foam with Cricut',
    'Cricut costume',
    'Cricut thermoplastic',
    'Cricut helmet',
    'Cricut weapon props',
  ],
  openGraph: {
    title: 'Cricut for Cosplay - EVA Foam & Armor Cutting Guide',
    description: 'Complete guide to cutting EVA foam, Worbla, and costume materials with Cricut Maker for cosplay projects.',
    type: 'website',
  },
};

export default function CosplayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
