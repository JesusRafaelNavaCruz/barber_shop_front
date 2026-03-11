"use client";

import Link from "next/link";
import { useBooking } from "@/app/context/BookingContext";

export function NavLinks({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  const { openBooking } = useBooking();

  const links = [
    {
      label: "Inicio",
      href: "#hero",
      isSection: true,
      isModal: false,
    },
    {
      label: "Servicios",
      href: "#services",
      isSection: true,
      isModal: false,
    },
    {
      label: "Equipos",
      href: "#staff",
      isSection: true,
      isModal: false,
    },
    {
      label: "Galeria",
      href: "#gallery",
      isSection: true,
      isModal: false,
    },
    {
      label: "Reservar",
      href: "#",
      isSection: false,
      isModal: true,
    },
  ];

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
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.label}
          onClick={(e) => {
            if (link.isModal) {
              handleModalClick(e);
            } else if (link.isSection) {
              handleSectionClick(e, link.href);
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
