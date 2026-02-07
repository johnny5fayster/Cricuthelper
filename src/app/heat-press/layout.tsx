import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heat Press Temperature & Time Guide - HTV Settings",
  description: "Complete heat press guide for Cricut crafters. Temperature, time, and pressure settings for every HTV type. Troubleshooting tips for iron-on vinyl, Infusible Ink, and sublimation.",
  keywords: ["heat press temperature", "HTV settings", "iron-on vinyl temperature", "heat press time", "Cricut EasyPress settings", "Infusible Ink temperature", "heat press troubleshooting"],
  openGraph: {
    title: "Heat Press Temperature & Time Guide",
    description: "Complete heat press settings for every HTV and iron-on vinyl type.",
  },
};

export default function HeatPressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
