'use client';

import { useState } from 'react';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Sistema de Gestión Empresarial",
      description: "Aplicación web completa para la gestión de recursos empresariales, incluyendo módulos de inventario, ventas y facturación.",
      tags: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/Julianidiego/project-1",
    },
    {
      id: 2,
      title: "Aplicación Móvil de Fitness",
      description: "App móvil para seguimiento de entrenamientos físicos, con planes personalizados y estadísticas de progreso.",
      tags: ["React Native", "Firebase", "JavaScript"],
      githubUrl: "https://github.com/Julianidiego/project-2",
    },
    {
      id: 3,
      title: "Portfolio Profesional",
      description: "Sitio web personal desarrollado con Next.js y TailwindCSS para mostrar proyectos y habilidades profesionales.",
      tags: ["Next.js", "TailwindCSS", "TypeScript"],
      githubUrl: "https://github.com/Julianidiego/Julianidiego.github.io",
      liveUrl: "https://julianidiego.github.io",
    },
    {
      id: 4,
      title: "API RESTful para E-commerce",
      description: "Backend completo con autenticación, gestión de productos, carritos de compra y procesamiento de pedidos.",
      tags: ["Express", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/Julianidiego/ecommerce-api",
    },
    {
      id: 5,
      title: "Análisis de Datos Financieros",
      description: "Sistema de análisis y visualización de datos financieros con dashboard interactivo y reportes automatizados.",
      tags: ["Python", "Pandas", "Data Science"],
      githubUrl: "https://github.com/Julianidiego/finance-analytics",
    },
    {
      id: 6,
      title: "Chatbot con Inteligencia Artificial",
      description: "Bot conversacional inteligente para atención al cliente, desarrollado con tecnologías de procesamiento de lenguaje natural.",
      tags: ["Python", "NLP", "Machine Learning"],
      githubUrl: "https://github.com/Julianidiego/ai-chatbot",
    },
  ];

  const filters = ['all', 'React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'JavaScript'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mis Proyectos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y destacados. Estos proyectos reflejan mis habilidades
            y experiencia en diferentes tecnologías y dominios.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {filter === 'all' ? 'Todos' : filter}
            </button>
          ))}
        </div>
        
        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                {project.imageUrl ? (
                  <Image 
                    src={project.imageUrl}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                    {project.title}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={`${project.id}-${tag}`} 
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <span className="sr-only">Ver sitio</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}