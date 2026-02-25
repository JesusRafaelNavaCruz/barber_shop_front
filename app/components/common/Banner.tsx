import React from 'react'

export default function Banner() {
  return (
    <section className='bg-black/80 dark:bg-surface-dark/50 py-20 border-t border-white/5' id='info'>
      <div className='mx-auto px-6 md:px-10 max-w-[1200px]'>
        <div className="bg-primary rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className='absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none'>
            <svg height="100%" preserveAspectRatio='none' viewBox='0 0 100 100' width="100%">
              <path d="M0 100 L100 0 L100 100 Z" fill='white'></path>
            </svg>
          </div>

          <div className='flex flex-col gap-4 z-10 text-center md:text-left'>
            <h2 className='text-white text-4xl font-extrabold leading-tight'>Listo para un cambio de look?</h2>
            <p className='text-white/90 text-lg max-w-md'>Reserva tu cita ahora y descubre porque somos los #1</p>
          </div>
          
          <div className='flex flex-col gap-3 min-w-[220px] z-10'>
            <button className='bg-white text-primary font-bold py-4 px-8 rounded-lg uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-2xl'>Agendar cita</button>
            <p className='text-white/70 text-sm text-center'>Atención de Lunes a Sábado</p>
          </div>

        </div>
      </div>
    </section>
  )
}
