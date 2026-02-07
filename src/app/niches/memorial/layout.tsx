import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cricut for Memorial Items | Memory Boxes, Ornaments & Tributes',
  description: 'Create meaningful memorial items with Cricut. Memory boxes, ornaments, grave markers, and keepsakes to honor loved ones. Tips for memorial craft sellers.',
  keywords: ['Cricut memorial', 'memory box Cricut', 'memorial ornament', 'in loving memory Cricut', 'Cricut grave marker', 'memorial crafts', 'remembrance items'],
};

export default function MemorialLayout({ children }: { children: React.ReactNode }) {
  return children;
}
