import { useState } from 'react'
import Image from 'next/image'

export default function FAQ() {
  const faqs = [
    { question: 'Vocês oferecem serviços de design de interiores?', answer: 'Sim, somos designers de interiores especializados em São Paulo. Entre em contato conosco para consultoria de design de interiores e arquitetura de luxo!' },
    { question: 'Posso solicitar serviços de arquitetura?', answer: 'Sim, oferecemos serviços de arquitetura além do design de interiores. Nossos profissionais são qualificados para projetos arquitetônicos completos.' },
    { question: 'Posso obter um orçamento gratuito?', answer: 'Claro! Oferecemos orçamentos gratuitos para todos os nossos serviços. Entre em contato conosco para agendar uma consulta.' },
    { question: 'Como funciona o processo de design?', answer: 'Nosso processo de design inclui consulta inicial, desenvolvimento de conceito, planejamento detalhado, seleção de materiais e implementação. Trabalhamos em estreita colaboração com você em cada etapa.' },
  ]

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-40 bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-2/3 px-4">
            <h2 className="text-1xl font-bold mb-2">Perguntas Frequentes</h2>
            <h3 className="text-4xl font-bold mb-8">Consultoria de Design de Interiores</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  >
                    <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                    <span className="text-2xl text-gray-500">{openIndex === index ? '−' : '+'}</span>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
            <Image src="/imagens/Furniture Store UI Design (2).png" width={400} height={300} alt="Interior Design" className="rounded-lg shadow-md-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
