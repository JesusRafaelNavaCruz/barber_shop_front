"use client";
import { useState } from "react";
import { NavLinks } from "./NavLinks";
import { Menu, X } from "lucide-react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button */}
      <button onClick={toggleMenu} className="md:hidden text-white">
        <Menu />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-40" onClick={toggleMenu} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6">
            <button className="self-end text-xl" onClick={toggleMenu}>
                <X />
            </button>
            <nav className="flex flex-col gap-4">
                <NavLinks className="text-white" onClick={toggleMenu} />
            </nav>
        </div>
      </aside>
    </>
  );
}
