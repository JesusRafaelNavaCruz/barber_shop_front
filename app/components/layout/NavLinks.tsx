"use client";

import Link from "next/link";
import { useBooking } from "@/app/context/BookingContext";
import type { NavLink } from "@/types/navbar";

export function NavLinks({
  navLinks,
  className = "",
  onClick,
}: {
  navLinks: NavLink[];
  className?: string;
  onClick?: () => void;
}) {
  const { openBooking } = useBooking();

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    
    onClick?.();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openBooking();
    onClick?.();
  };

  return (
    <>
      {navLinks.map((link) => (
        <Link
          href={link.link}
          key={link.id}
          onClick={(e) => {
            if (link.isModal) {
              handleModalClick(e);
            } else if (link.isSection) {
              handleSectionClick(e, link.link);
            } else {
              onClick?.();
            }
          }}
          className={`uppercase tracking-widest text-sm hover:text-primary transition ${className}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
