import type { Metadata } from "next";
import { getSiteSetting } from "@/services/siteSettings";

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSetting();
  return {
    title: siteSettings.seo.defaultTitle,
    description: siteSettings.seo.metaDescription,
    openGraph: {
      images: siteSettings.seo.ogImage ? [siteSettings.seo.ogImage.url] : [],
    },
  };
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}