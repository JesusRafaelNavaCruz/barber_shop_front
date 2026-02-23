import type { Metadata } from "next";
import { getSiteSetting } from "@/services/siteSettings";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSetting();
  return {
    title: siteSettings?.seo?.defaultTitle ?? "Bandoleros Barber Shop",
    description:
      siteSettings?.seo?.metaDescription ?? "Barbería profesional en Morelos",
    openGraph: {
      images: siteSettings?.seo?.ogImage
        ? [siteSettings?.seo?.ogImage?.url]
        : [],
    },
  };
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
