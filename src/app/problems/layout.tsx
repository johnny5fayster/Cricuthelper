import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Common Cricut Problems & Solutions | Fix Your Cricut Issues',
  description: 'Troubleshoot common Cricut problems: cutting issues, Design Space crashes, Bluetooth problems, HTV not sticking, Print Then Cut misaligned, and more. Step-by-step solutions.',
  keywords: [
    'Cricut not cutting',
    'Cricut Design Space slow',
    'Cricut Bluetooth not connecting',
    'Cricut won\'t cut through vinyl',
    'HTV not sticking',
    'Cricut mat not sticky',
    'Print Then Cut misaligned',
    'Cricut troubleshooting',
    'Cricut problems and solutions',
    'why is my Cricut not working',
    'Cricut blade not cutting',
    'Cricut Design Space crashing',
    'Cricut iron-on peeling',
    'Cricut calibration not working',
  ],
  openGraph: {
    title: 'Common Cricut Problems & Solutions',
    description: 'Having Cricut issues? Get instant troubleshooting help for cutting problems, Design Space errors, connection issues, and more.',
    type: 'website',
  },
};

export default function ProblemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
