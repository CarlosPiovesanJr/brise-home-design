import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Project {
    id: number;
    image: string;
    span: string;
}

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const stats = [
        { value: '[180 +]', label: 'Clientes Atendidos' },
        { value: '[10 +]', label: 'Anos de Experiência' },
        { value: '[35 +]', label: 'Prêmios Ganhos' },
        { value: '[5 +]', label: 'Escritórios no Mundo' },
    ];

    const projects: Project[] = [
        { id: 1, image: '/imagens/projeto4.png', span: 'col-span-2 row-span-2' },
        { id: 2, image: '/imagens/projeto2.png', span: 'col-span-2 row-span-1' },
        { id: 3, image: '/imagens/projeto7.png', span: 'col-span-1 row-span-1' },
        { id: 4, image: '/imagens/projeto5.png', span: 'col-span-1 row-span-1' },
        { id: 5, image: '/imagens/projeto6.png', span: 'col-span-1 row-span-1' },
        { id: 6, image: '/imagens/projeto3.png', span: 'col-span-1 row-span-1' },
        { id: 7, image: '/imagens/projeto1.png', span: 'col-span-2 row-span-1' },
    ];

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setSelectedIndex(projects.findIndex(p => p.id === project.id));
    };

    const closeModal = () => {
        setSelectedProject(null);
        setSelectedIndex(null);
    };

    const navigateProjects = (direction: 'next' | 'prev') => {
        if (selectedIndex === null) return;
        
        let newIndex = direction === 'next' ? selectedIndex + 1 : selectedIndex - 1;
        
        if (newIndex < 0) {
            newIndex = projects.length - 1;
        } else if (newIndex >= projects.length) {
            newIndex = 0;
        }
        
        setSelectedProject(projects[newIndex]);
        setSelectedIndex(newIndex);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            } else if (event.key === 'ArrowRight') {
                navigateProjects('next');
            } else if (event.key === 'ArrowLeft') {
                navigateProjects('prev');
            }
        };
        
        if (selectedProject) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedProject, selectedIndex]);

    return (
        <section id="portfolio" className="py-4 bg-white section-padding">
            <div className="container mx-auto px-4">
                {/* Estatísticas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-light text-gray-600 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Galeria de Projetos */}
                <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
                    {projects.map((project) => (
                        <div key={project.id} className={`relative overflow-hidden group ${project.span}`}>
                            <Image 
                                src={project.image} 
                                alt={`Projeto ${project.id}`}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button 
                                    className="bg-white text-black px-4 py-2 rounded-md"
                                    onClick={() => openModal(project)}
                                >
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg w-11/12 h-5/6 relative">
                        <button 
                            className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <div className="w-full h-full relative">
                            <Image 
                                src={selectedProject.image} 
                                alt={`Projeto ${selectedProject.id}`}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <button 
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-md"
                            onClick={() => navigateProjects('prev')}
                        >
                            &lt;
                        </button>
                        <button 
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-md"
                            onClick={() => navigateProjects('next')}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
