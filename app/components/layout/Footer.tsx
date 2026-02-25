import { Skull } from 'lucide-react'
import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className='border-t border-white/5  py-12 px-6 md:px-20'>
      <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className="flex items-center gap-3 dark:text-white">
            <Skull className='text-primary'/>
            <span className="font-bold italic">Bandoleros BarberShop</span>
        </div>
        <div className='flex gap-8'>
            <a className='text-slate-500 hover:text-primary transition-colors text-sm font-medium cursor-pointer'>Privacidad</a>
            <a className='text-slate-500 hover:text-primary transition-colors text-sm font-medium cursor-pointer'>Términos</a>
            <a className='text-slate-500 hover:text-primary transition-colors text-sm font-medium cursor-pointer'>Soporte</a>
        </div>
        <p className='text-slate-500 text-sm'>&#169; {currentYear} Bandoleros BarberShop. Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
