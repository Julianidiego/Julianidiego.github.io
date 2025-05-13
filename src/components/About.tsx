'use client';

import { useRef, useEffect } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mí
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Soy un desarrollador de software apasionado por la creación de soluciones tecnológicas efectivas y elegantes. 
              Con más de 5 años de experiencia en el desarrollo de software, me especializo en la creación de aplicaciones 
              robustas utilizando tecnologías modernas.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Mi enfoque combina habilidades técnicas sólidas con una comprensión profunda de las necesidades del usuario final. 
              Me esfuerzo por escribir código limpio, mantenible y escalable, siempre con un ojo en la experiencia del usuario 
              y el rendimiento del sistema.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A lo largo de mi carrera, he trabajado en proyectos diversos que abarcan desde aplicaciones empresariales 
              hasta soluciones personalizadas para pequeñas empresas, lo que me ha brindado una perspectiva amplia y adaptable 
              en el desarrollo de software.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Educación</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-medium text-gray-900 dark:text-white">Ingeniería en Sistemas</div>
                  <div className="text-gray-600 dark:text-gray-300">Universidad Nacional de La Plata</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">2015 - 2020</div>
                </li>
                <li>
                  <div className="font-medium text-gray-900 dark:text-white">Certificación en Desarrollo Web Full Stack</div>
                  <div className="text-gray-600 dark:text-gray-300">Digital House</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">2018</div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Intereses Personales</h3>
              <div className="flex flex-wrap gap-2">
                {['Tecnología', 'Programación', 'IA', 'Música', 'Fotografía', 'Videojuegos', 'Viajes'].map((interest) => (
                  <span 
                    key={interest}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}