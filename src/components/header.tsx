import React, { useState } from 'react';
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerOffset = 96 // Ajuste este valor para corresponder à altura total do seu header
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gray-100 h-8 flex items-center justify-end px-4">
        <span className="text-sm mr-4 hidden sm:inline-flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          (54) 99113-3700
        </span>
        <span className="text-sm hidden sm:inline-flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          contato@brisehomedesign.com.br
        </span>
      </div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/imagens/logo.png" alt="Logo" width={60} height={60} className="mr-2" />
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="text-gray-600 hover:text-gray-900">Início</a>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="text-gray-600 hover:text-gray-900">Sobre</a>
            <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="text-gray-600 hover:text-gray-900">Serviços</a>
            <a href="#portfolio" onClick={(e) => handleSmoothScroll(e, 'portfolio')} className="text-gray-600 hover:text-gray-900">Portfólio</a>
            <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')} className="text-gray-600 hover:text-gray-900">FAQ</a>
          </div>
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Início</a>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Sobre</a>
            <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Serviços</a>
            <a href="#portfolio" onClick={(e) => handleSmoothScroll(e, 'portfolio')} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Portfólio</a>
            <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">FAQ</a>
          </div>
        )}
      </nav>
    </header>
  )
}
