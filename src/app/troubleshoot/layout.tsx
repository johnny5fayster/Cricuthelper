import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cricut Troubleshooting Wizard - Fix Common Problems",
  description: "Step-by-step troubleshooting for Cricut Maker, Explore, and Joy. Fix cutting issues, Bluetooth problems, mat grip, and more. Free interactive diagnostic tool.",
  keywords: ["Cricut not cutting", "Cricut troubleshooting", "Cricut problems", "Cricut Bluetooth fix", "Cricut mat not sticking", "Cricut blade issues"],
  openGraph: {
    title: "Cricut Troubleshooting Wizard",
    description: "Fix your Cricut problems with our free step-by-step troubleshooting wizard.",
  },
};

export default function TroubleshootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
