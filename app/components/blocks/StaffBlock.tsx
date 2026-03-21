import type { StaffBlock } from '@/types/pages'
import React from 'react'
import Title from '../Title';
import StaffCard from '../StaffCard';

interface StaffBlockRenderProps {
  block: StaffBlock;
}

export default function StaffBlock({block}: StaffBlockRenderProps) {
  return (
    <section
      className="bg-black/80 dark:bg-surface-dark/50 py-12 sm:py-16 md:py-20 border-y border-white/5"
      id="staff"
    >
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0 max-w-full lg:max-w-[1200px]">

          <Title
            title={block.title}
            subtitle={block.subtitle}
          />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">  
          {block.staff && block.staff.map((staff, index) => (
            <StaffCard key={index} staff={staff} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
