import Image from 'next/image'
import { BuildingOfficeIcon, HomeIcon, TicketIcon } from '@heroicons/react/24/outline'

export default function Services() {
  return (
    <section id="services" className="py-40 relative flex items-center justify-center section-padding">
      <div className="absolute inset-x-0 top-0 h-5/6 overflow-hidden">
        <Image 
          src="/imagens/Furniture Store UI Design (1).png" 
          layout="fill" 
          objectFit="cover" 
          alt="Background" 
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Nossos Serviços</h2>
        <div className="flex flex-wrap -mx-4 justify-center">
          {[
            { icon: BuildingOfficeIcon, title: 'Escritório', description: 'Do quarto à sala de estar, sala de jantar, espaços de escritório' },
            { icon: HomeIcon, title: 'Casa', description: 'Do quarto à sala de estar, sala de jantar, espaços residenciais' },
            { icon: TicketIcon, title: 'Auditório', description: 'Mobiliário escolar, mobiliário de auditório' },
          ].map((service, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8 flex flex-col items-center">
              <div className="text-center max-w-xs">
                <div className="inline-block p-4 rounded-full bg-white bg-opacity-10 mb-6">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
