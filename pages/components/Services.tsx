import Image from 'next/image'
import { BuildingOfficeIcon, HomeIcon, TicketIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Services() {
  return (
    <section id="services" className="py-16 relative">
      <Image src="/imagens/Furniture Store UI Design (1).png" layout="fill" objectFit="cover" alt="Background" />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Nossos Serviços</h2>
        <div className="flex flex-wrap -mx-4">
          {[
            { icon: BuildingOfficeIcon, title: 'Escritório', description: 'Do quarto à sala de estar, sala de jantar, espaços de escritório' },
            { icon: HomeIcon, title: 'Casa', description: 'Do quarto à sala de estar, sala de jantar, espaços residenciais' },
            { icon: TicketIcon, title: 'Auditório', description: 'Mobiliário escolar, mobiliário de auditório' },
          ].map((service, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center">
                <div className="inline-block p-3 rounded-full bg-white bg-opacity-10 mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}