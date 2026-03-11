import { getSiteSetting } from "@/services/siteSettings";
import { getNavbarLinks } from "@/services/navbar";
import { MobileNav } from "./MobileNav";
import Image from "next/image";
import { DesktopNav } from "./DesktopNav";

export default async function Header() {
  const siteSettings = await getSiteSetting();
  let navbarData = null;

  try {
    navbarData = await getNavbarLinks();
  } catch (error) {
    console.error("Error fetching navbar data: ", error);
  }

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
          <MobileNav navLinks={navbarData?.navigationLinks || []} />
          {siteSettings?.logo && (
            <Image
              src={siteSettings.logo.url || ""}
              width={siteSettings.logo.width || 120}
              height={siteSettings.logo.height || 120}
              alt={siteSettings.logo.alt || siteSettings.siteName || "Logo"}
              className="h-8 mx-auto"
            />
          )}
          <div className="w-6" /> {/* spacer */}
        </div>
        {/* Desktop */}
        <DesktopNav
          logo={siteSettings?.logo?.url || ""}
          siteName={siteSettings?.siteName || ""}
          navLinks={navbarData?.navigationLinks || []}
        />
      </div>
    </header>
  );
}
