import { getSiteSetting } from "@/services/siteSettings";
import { MobileNav } from "./MobileNav";
import Image from "next/image";
import { DesktopNav } from "./DesktopNav";

export default async function Header() {
  const siteSettings = await getSiteSetting();

  return (
    <header
      className="sticky top-0 z-50
  backdrop-blur-md
  bg-white/80 dark:bg-black/70
  supports-[backdrop-filter]:bg-white/60
  dark:supports-[backdrop-filter]:bg-black/60
  text-gray-900 dark:text-white
  border-b border-gray-200 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:justify-center">
        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between w-full">
          <MobileNav />
          {siteSettings?.seo?.ogImage && (
            <Image
              src={siteSettings?.seo?.ogImage?.url}
              width="120"
              height="120"
              alt={siteSettings?.seo?.defaultTitle ?? "Bandoleros Barber Shop"}
              className="h-8 mx-auto"
            />
          )}
          <div className="w-6" /> {/* spacer */}
        </div>
        {/* Desktop */}
        <DesktopNav
          logo={
            siteSettings?.seo?.ogImage ? siteSettings?.seo?.ogImage?.url : ""
          }
        />
      </div>
    </header>
  );
}
