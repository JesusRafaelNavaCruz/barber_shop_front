import Image from "next/image";
import { NavLinks } from "./NavLinks";
import { Skull } from "lucide-react";

export function DesktopNav({ logo }: { logo: string }) {
  return (
    <nav className="hidden md:flex items-center justify-between w-full">
      <div className="flex gap-2 justify-start">
        <Skull className="text-primary" />
        <span className="font-bold italic">Bandoleros BarberShop</span>
      </div>
      <div className="flex gap-6 justify-end">
        <NavLinks />
      </div>
    </nav>
  );
}
