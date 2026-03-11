import type { Metadata } from "next";
import { getSiteSetting } from "@/services/siteSettings";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingButton from "../components/FloatingButton";
import { BookingProvider } from "@/app/context/BookingContext";
import BookingModal from "@/app/components/BookingModal";

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSetting();
  return {
    title: siteSettings?.siteName ?? "Piratas BarberShop",
    description: siteSettings?.seo?.defaultTitle ?? "Barbería profesional en Morelos",
    keywords: ["barbería", "cortes", "barbero", "estilo"],
    openGraph: {
      title: siteSettings?.siteName ?? "Piratas BarberShop",
      description: siteSettings?.seo?.defaultTitle ?? "Barbería profesional",
      images: siteSettings?.seo?.ogImage?.url
        ? [
            {
              url: siteSettings.seo.ogImage.url,
              width: siteSettings.seo.ogImage.width ?? 1200,
              height: siteSettings.seo.ogImage.height ?? 630,
              alt: siteSettings.seo.ogImage.alt ?? siteSettings.siteName,
            },
          ]
        : [],
      type: "website",
    },
    icons: siteSettings?.favicon?.url
      ? [
          {
            rel: "icon",
            url: siteSettings.favicon.url,
            type: siteSettings.favicon.mimeType ?? "image/x-icon",
          },
        ]
      : [],
    robots: {
      index: siteSettings?.seo?.indexingEnabled ?? true,
      follow: siteSettings?.seo?.indexingEnabled ?? true,
    },
  };
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BookingProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingButton />
      <BookingModal />
    </BookingProvider>
  );
}
