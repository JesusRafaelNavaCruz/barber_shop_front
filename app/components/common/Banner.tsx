"use client";

import React from 'react'
import { useBooking } from '@/app/context/BookingContext';

export default function Banner() {
  const { openBooking } = useBooking();

  return (
    <section className='bg-black/80 dark:bg-surface-dark/50 py-20 border-t border-white/5' id='info'>
      <div className='mx-auto px-6 md:px-10 max-w-[1200px]'>
        <div className='bg-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 overflow-hidden relative'>
          <div className='absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none'>
            <svg height="100%" preserveAspectRatio='none' viewBox='0 0 100 100' width="100%">
              <path d="M0 100 L100 0 L100 100 Z" fill='white'></path>
            </svg>
          </div>

          <div className='flex flex-col gap-3 sm:gap-4 z-10 text-center md:text-left'>
            <h2 className='text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight'>Listo para un cambio de look?</h2>
            <p className='text-white/90 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md'>Reserva tu cita ahora y descubre porque somos los #1</p>
          </div>
          
          <div className='flex flex-col gap-2 sm:gap-3 min-w-full sm:min-w-[220px] z-10'>
            <button onClick={openBooking} className='bg-white text-primary font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-2xl text-sm sm:text-base'>Agendar cita</button>
            <p className='text-white/70 text-xs sm:text-sm text-center'>Atención de Lunes a Sábado</p>
          </div>

        </div>
      </div>
    </section>
  )
}
