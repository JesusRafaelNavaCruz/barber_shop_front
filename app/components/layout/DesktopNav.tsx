import Image from "next/image";
import { NavLinks } from "./NavLinks";
import { Skull } from "lucide-react";
import type { NavLink } from "@/types/navbar";

export function DesktopNav({
  logo,
  siteName,
  navLinks,
}: {
  logo: string;
  siteName: string;
  navLinks: NavLink[];
}) {
  return (
    <nav className="hidden md:flex items-center justify-between w-full">
      <div className="flex gap-2 justify-start items-center">
        {logo ? (
          <Image
            src={logo}
            width={32}
            height={32}
            alt={siteName || "Logo"}
            className="h-8"
          />
        ) : (
          <Skull className="text-primary" />
        )}
        <span className="font-bold italic">{siteName || "Barber Shop"}</span>
      </div>
      <div className="flex gap-6 justify-end">
        <NavLinks navLinks={navLinks} />
      </div>
    </nav>
  );
}
