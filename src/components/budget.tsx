import React, { useState } from 'react';

const Budget = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interests: [] as string[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prevState => ({
      ...prevState,
      interests: prevState.interests.includes(interest)
        ? prevState.interests.filter(i => i !== interest)
        : [...prevState.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    // Aqui você pode adicionar a lógica para enviar o formulário
  };

  const interests = ['Design de Interiores', 'Design de Exteriores', 'Mobiliário', 'Consultoria', 'Outro'];

  return (
    <section id="budget" className="py-16 bg-gray-200 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-4xl font-bold mb-4">Vamos conversar <br /> sobre algo <span className="text-blue-500">incrível</span> <br /> juntos</h2>
              <div className="mb-4">
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  contato@brisehomedesign.com.br
                </p>
              </div>
              <div className="mb-4">
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  (54) 99113-3700
                </p>
              </div>
              <div className="mb-4">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  Rua Exemplo, 123 - Cidade, Estado
                </p>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#" className="text-gray-700 hover:text-gray-900">LinkedIn</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Instagram</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Facebook</a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Estou interessado em:</h3>
              <div className="flex flex-wrap mb-4">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestChange(interest)}
                    className={`mr-2 mb-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out ${
                      formData.interests.includes(interest)
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Seu nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Seu email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Sua mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Budget;
