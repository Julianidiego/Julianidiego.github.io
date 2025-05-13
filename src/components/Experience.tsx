'use client';

import { useRef, useEffect } from 'react';

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
};

export default function Experience() {
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

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Desarrollador Full Stack Senior",
      company: "Tecnología Innovadora S.A.",
      location: "Buenos Aires, Argentina",
      period: "Enero 2022 - Presente",
      description: [
        "Lideré el desarrollo de una plataforma web para gestión de recursos empresariales utilizando React y Node.js.",
        "Implementé arquitectura basada en microservicios con Docker y Kubernetes.",
        "Colaboré con equipos multidisciplinarios para diseñar e implementar nuevas características.",
        "Mentoría a desarrolladores junior y revisión de código."
      ],
      technologies: ["React", "Node.js", "TypeScript", "Docker", "MongoDB"]
    },
    {
      id: 2,
      title: "Desarrollador Full Stack",
      company: "Software Solutions",
      location: "Córdoba, Argentina",
      period: "Marzo 2019 - Diciembre 2021",
      description: [
        "Desarrollé aplicaciones web completas para clientes del sector financiero.",
        "Implementación de APIs RESTful y bases de datos SQL y NoSQL.",
        "Optimización de rendimiento y experiencia de usuario en aplicaciones existentes.",
        "Participación en todas las fases del ciclo de desarrollo de software."
      ],
      technologies: ["JavaScript", "PHP", "MySQL", "React", "Laravel"]
    },
    {
      id: 3,
      title: "Desarrollador Frontend",
      company: "Digital Innovation",
      location: "Remoto",
      period: "Junio 2017 - Febrero 2019",
      description: [
        "Creación de interfaces de usuario responsivas y accesibles.",
        "Optimización del rendimiento de aplicaciones web para dispositivos móviles.",
        "Integración con APIs externas y servicios de terceros.",
        "Implementación de sistemas de pruebas automatizadas."
      ],
      technologies: ["HTML/CSS", "JavaScript", "React", "SASS", "Jest"]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software a lo largo de los años.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="relative border-l-4 border-blue-600 ml-6 md:ml-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="mb-12 ml-10 md:ml-16 relative"
            >
              {/* Punto en la línea de tiempo */}
              <div className="absolute -left-[46px] md:-left-[50px] mt-1.5 w-9 h-9 rounded-full border-4 flex items-center justify-center bg-white dark:bg-gray-800 border-blue-600">
                <span className="text-blue-600 font-bold text-sm">{experiences.length - index}</span>
              </div>
              
              {/* Contenido */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="text-right mt-2 sm:mt-0">
                    <div className="text-gray-700 dark:text-gray-300 font-medium">
                      {exp.location}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </div>
                  </div>
                </div>
                
                <ul className="list-disc ml-5 mb-4 space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}