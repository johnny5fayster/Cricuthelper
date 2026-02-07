import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cricut Profit Calculator - Etsy Seller Pricing Tool",
  description: "Calculate your true profit per item including materials, labor, Etsy fees, and shipping. Free pricing tool for Cricut crafters selling on Etsy, Amazon Handmade, and craft fairs.",
  keywords: ["Cricut profit calculator", "Etsy fee calculator", "craft pricing calculator", "HTV pricing", "tumbler pricing", "handmade pricing tool", "craft business calculator"],
  openGraph: {
    title: "Cricut Profit Calculator for Etsy Sellers",
    description: "Calculate true profit including materials, labor, and marketplace fees.",
  },
};

export default function ProfitCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
