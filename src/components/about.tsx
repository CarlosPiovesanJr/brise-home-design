import Image from 'next/image'
import { Disclosure } from '@headlessui/react'

export default function About() {
  return (
    <section id="about" className="py-16 section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="grid grid-cols-2 gap-4">
              <Image src="/imagens/V-CY02D20_24 G.png" width={300} height={300} alt="Image 1" className="rounded-lg" />
              <Image src="/imagens/V-CY02D20_24 E.png" width={300} height={300} alt="Image 2" className="rounded-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-2xl font-light mb-2">Quem somos?</h2>
            <h3 className="text-4xl font-medium mb-4 text-shadow">Brise Home Design</h3>
            <div className="w-48 h-1 bg-gray-300 mb-6"></div>
            <p className="mb-8 font-light">
              Nascemos em janeiro de 1996, em São Paulo, onde entramos no negócio de mobiliário para residências e
              espaços comerciais. Começamos com a intenção de promover a arte de viver bem e permitir que as pessoas adquiram 
              seu estilo pessoal em suas casas e estabelecimentos comerciais. Após anos de trabalho árduo e dedicação.
            </p>
            <div className="space-y-2">
              {['Projetos de Design de Interiores', 'Projetos de Design de Exteriores', 'Clientes Atendidos'].map((item, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                        <span>{item}</span>
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
                        {index === 0 && 'Realizamos mais de 200 projetos de design de interiores, transformando casas em lares aconchegantes e funcionais.'}
                        {index === 1 && 'Completamos mais de 200 projetos de design de exteriores, criando espaços ao ar livre deslumbrantes e harmoniosos.'}
                        {index === 2 && 'Temos o orgulho de ter atendido mais de 460 clientes satisfeitos, ajudando-os a realizar seus sonhos de design.'}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
