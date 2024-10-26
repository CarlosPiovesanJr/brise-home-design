import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import React from 'react'


export default function FAQ() {
  console.log({ Image, Disclosure })
  const faqs = [
    { question: 'Vocês oferecem serviços de design de interiores?', answer: 'Sim, somos designers de interiores especializados em São Paulo. Entre em contato conosco para consultoria de design de interiores e arquitetura de luxo!' },
    { question: 'Posso solicitar serviços de arquitetura?', answer: 'Sim, oferecemos serviços de arquitetura além do design de interiores. Nossos profissionais são qualificados para projetos arquitetônicos completos.' },
    { question: 'Posso obter um orçamento gratuito?', answer: 'Claro! Oferecemos orçamentos gratuitos para todos os nossos serviços. Entre em contato conosco para agendar uma consulta.' },
    { question: 'Como funciona o processo de design?', answer: 'Nosso processo de design inclui consulta inicial, desenvolvimento de conceito, planejamento detalhado, seleção de materiais e implementação. Trabalhamos em estreita colaboração com você em cada etapa.' },
  ]

  return (
    <section id="faq" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-2/3 px-4">
            <h2 className="text-3xl font-bold mb-2">Perguntas Frequentes</h2>
            <h3 className="text-2xl font-bold mb-8">Consultoria de Design de Interiores</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                        <span>{faq.question}</span>
                        {/* Substituindo ChevronUpIcon por um ícone SVG simples */}
                        <svg
                          className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15l-3-3h6l-3 3z" />
                        </svg>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        {faq.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
            <Image src="/imagens/interior-design-image.jpg" width={400} height={300} alt="Interior Design" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
