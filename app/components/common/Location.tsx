import { Clock, MapPin, Phone, Mail, MessageCircle, Link2 } from "lucide-react";
import React from "react";
import { getSiteSetting } from "@/services/siteSettings";
import { SocialIcon } from "../SocialIcon";

export default async function Location() {
  let siteSettings = null;

  try {
    siteSettings = await getSiteSetting();
  } catch (error) {
    console.error("Error fetching site settings: ", error);
  }

  const address = siteSettings?.contact?.address || "Dirección no disponible";
  const phone = siteSettings?.contact?.phone;
  const email = siteSettings?.contact?.email;
  const whatsapp = siteSettings?.contact?.whatsapp;
  const socials = siteSettings?.socials || [];

  const formatPhoneLink = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;
  const formatWhatsappLink = (phone: string) =>
    `https://wa.me/${phone.replace(/\D/g, "")}`;

  // Crear URL de Google Maps dinámicamente con la dirección
  const mapsUrl =
    address && address !== "Dirección no disponible"
      ? `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=m&z=15&output=embed`
      : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d844.9597043007224!2d-99.22459981449487!3d18.83613778431124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdd9cedb104e7f%3A0xfeb61d7c4c4c4363!2sPlaza%20Solaz!5e0!3m2!1ses-419!2smx!4v1771817685474!5m2!1ses-419!2smx";

  return (
    <section
      className="bg-black/80 dark:bg-surface-dark/50 py-8 sm:py-12 md:py-16 border-b border-white/5"
      id="location"
    >
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0 max-w-full lg:max-w-[1200px] flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase italic">
              Visitanos
            </h2>
            <p className="text-slate-400">
              Encuentranos en nuestra ubicación principal
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-start">
              <div className="text-primary h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <MapPin />
              </div>
              <div>
                <p className="text-white font-bold">Dirección</p>
                <p className="text-slate-400">{address}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-primary h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <Clock />
              </div>
              <div>
                <p className="text-white font-bold">Horarios</p>
                <p className="text-slate-400">Lun - Vie: 9am-7pm</p>
                <p className="text-slate-400">Sáb: 9am-5pm</p>
              </div>
            </div>

            {phone && (
              <div className="flex gap-4 items-start">
                <div className="text-primary h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Phone />
                </div>
                <div>
                  <p className="text-white font-bold">Teléfono</p>
                  <a
                    href={formatPhoneLink(phone)}
                    className="text-slate-400 hover:text-primary transition"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            )}

            {email && (
              <div className="flex gap-4 items-start">
                <div className="text-primary h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Mail />
                </div>
                <div>
                  <p className="text-white font-bold">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-slate-400 hover:text-primary transition"
                  >
                    {email}
                  </a>
                </div>
              </div>
            )}

            {whatsapp && (
              <div className="flex gap-4 items-start">
                <div className="text-primary h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <MessageCircle />
                </div>
                <div>
                  <p className="text-white font-bold">WhatsApp</p>
                  <a
                    href={formatWhatsappLink(whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition"
                  >
                    {whatsapp}
                  </a>
                </div>
              </div>
            )}

            {socials && socials.length > 0 && (
              <div className="flex gap-4 items-start">
                <div className="w-full">
                  <p className="text-white font-bold mb-2">Síguenos</p>
                  <div className="flex gap-3 flex-wrap">
                    {socials.map((social) => (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-black transition text-sm font-medium capitalize"
                      >
                        <SocialIcon platform={social.platform} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 min-h-[250px] sm:min-h-[300px] md:min-h-[400px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 grayscale contrast-125 brightness-75">
          <iframe
            src={mapsUrl}
            width="100%"
            height="100%"
            style={{ minHeight: "inherit", border: "none" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
