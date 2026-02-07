import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cricut Seasonal Selling Calendar | Christmas, Halloween & Holiday Crafts',
  description: 'Plan your Cricut seasonal crafts year-round. Know when to make Christmas, Halloween, Easter and holiday items for maximum Etsy and craft fair sales.',
  keywords: ['Cricut Christmas', 'Cricut Halloween', 'seasonal Cricut crafts', 'holiday Cricut projects', 'Cricut ornaments', 'Cricut holiday shirts', 'craft fair seasonal'],
};

export default function SeasonalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
