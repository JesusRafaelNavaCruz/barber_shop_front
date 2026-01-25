import Link from "next/link";

export function NavLinks({
  className = "",
  onClick,
}: {
  className: string;
  onClick?: () => void;
}) {
  const links = [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Servicios",
      href: "/services",
    },
    {
      label: "Equipos",
      href: "/staff",
    },
    {
      label: "Galeria",
      href: "/gallery",
    },
    {
      label: "Reservar",
      href: "/Booking",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.label}
          onClick={onClick}
          className={`uppercase tracking-widest text-sm hover:text-primary transition ${className}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
