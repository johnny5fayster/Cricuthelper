import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cricut Material Cut Settings Database - 100+ Materials",
  description: "Find perfect cut settings for any material. Searchable database with blade, pressure, and speed settings for vinyl, HTV, cardstock, leather, fabric, and more.",
  keywords: ["Cricut material settings", "Cricut cut settings", "vinyl cut settings", "HTV settings", "Cricut blade settings", "Cricut pressure settings", "Oracal 651 settings", "Siser EasyWeed settings"],
  openGraph: {
    title: "Cricut Material Settings Database",
    description: "Find perfect cut settings for 100+ materials including vinyl, HTV, cardstock, and more.",
  },
};

export default function MaterialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
