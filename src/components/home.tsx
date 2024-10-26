import Image from 'next/image'

export default function Home() {
  const handleScrollToBudget = () => {
    const budgetSection = document.getElementById('budget');
    if (budgetSection) {
      budgetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-end section-padding">
      <Image 
        src="/imagens/Furniture Store UI Design.png"
        layout="fill"
        objectFit="cover"
        alt="Image"
        className="rounded-lg" 
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-lg bg-white bg-opacity-90 p-8 rounded-lg shadow-lg ml-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-left">
            Faça.<br />Você. Em Casa.
          </h1>
          <p className="text-xl text-gray-600 mb-6 text-left">
            Bem-vindo à Brise Home Design.<br />As Soluções de Interiores de Luxo
          </p>
          <div className="flex justify-left">
            <button 
              onClick={handleScrollToBudget}
              className="bg-gray-800 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-700 transition duration-300"
            >
              Solicite orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
