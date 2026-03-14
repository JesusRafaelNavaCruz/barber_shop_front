import { ServiceBlock } from '@/types/pages'
import React from 'react'
import Title from '../Title'
import ServiceCard from '../ServiceCard'

interface ServiceBlockRendererProps {
  block: ServiceBlock
}

export default function ServiceBlocks({block}: ServiceBlockRendererProps) {
  return (
    <section
      className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-10 lg:px-0 mx-auto max-w-full lg:max-w-[1200px]"
      id="services"
    >
      <Title
        title={block.title}
        subtitle={block.subtitle}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
        {block.services && block.services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}
