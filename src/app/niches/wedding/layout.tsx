import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cricut for Weddings | DIY Invitations, Signs & Wedding Decor',
  description: 'Create wedding invitations, signs, cake toppers, favor tags and more with Cricut. Save thousands on DIY wedding decor with our tips and project ideas.',
  keywords: ['Cricut wedding', 'DIY wedding invitations', 'Cricut wedding signs', 'wedding cake topper Cricut', 'Cricut favor tags', 'DIY wedding decor', 'Cricut bridal'],
};

export default function WeddingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
