import Image from 'next/image'
import React from 'react'

export default function Home() {
  console.log({ Image, React })
  return (
    <section id="home" className="h-screen relative">
      <Image src="/imagens/Furniture Store UI Design.png" width={300}
        height={300}
        alt="Image"
        className="background" />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Faça.<br />Você.<br />Em Casa.
            </h1>
            <p className="text-xl text-white mb-6">
              Bem-vindo à Brise Home Design.<br />As Soluções de Interiores de Luxo
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition duration-300">
              Explorar Serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}