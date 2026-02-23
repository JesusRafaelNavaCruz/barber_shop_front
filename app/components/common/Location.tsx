import { Clock, MapPin, Phone } from "lucide-react";
import React from "react";

export default function Location() {
  return (
    <section
      className="bg-surface-dark/50 py-10 border-b border-white/5"
      id="location"
    >
      <div className="mx-auto px-6 md:px-10 max-w-[1200px] flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-3xl font-extrabold uppercase italic">
              Visitanos
            </h2>
            <p className="text-slate-400">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-start">
              <div className="text-primary h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <MapPin />
              </div>
              <div>
                <p className="text-white font-bold">Dirección</p>
                <p className="text-slate-400">
                  Av. de los Prócederes 453, Edificio A
                </p>
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

            <div className="flex gap-4 items-start">
              <div className="text-primary h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <Phone />
              </div>
              <div>
                <p className="text-white font-bold">Telefono</p>
                <p className="text-slate-400">(777) 111 - 12 - 13</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 min-h-[400px] rounded-2xl overflow-hidden border border-white/10 grayscale contrast-125 brightness-75">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d844.9597043007224!2d-99.22459981449487!3d18.83613778431124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdd9cedb104e7f%3A0xfeb61d7c4c4c4363!2sPlaza%20Solaz!5e0!3m2!1ses-419!2smx!4v1771817685474!5m2!1ses-419!2smx"
            width="600"
            height="400"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
