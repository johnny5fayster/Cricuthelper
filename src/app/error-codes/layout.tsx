import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cricut Error Codes - Lookup & Solutions",
  description: "Look up any Cricut Design Space error code and get instant solutions. Fix error 1001, 1006, 2001, and more. Complete error code database with step-by-step fixes.",
  keywords: ["Cricut error code", "Design Space error", "Cricut 1001 error", "Cricut connection error", "Cricut not working", "Cricut troubleshooting", "Cricut firmware error"],
  openGraph: {
    title: "Cricut Error Code Lookup",
    description: "Look up any Cricut error code and get instant solutions.",
  },
};

export default function ErrorCodesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
