'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

type Skill = {
  name: string;
  level: number; // 1-5
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages';
};

export default function Skills() {
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

  const skills: Skill[] = [
    // Frontend
    { name: 'HTML/CSS', level: 5, category: 'frontend' },
    { name: 'JavaScript', level: 5, category: 'frontend' },
    { name: 'TypeScript', level: 4, category: 'frontend' },
    { name: 'React', level: 5, category: 'frontend' },
    { name: 'Next.js', level: 4, category: 'frontend' },
    { name: 'TailwindCSS', level: 4, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 4, category: 'backend' },
    { name: 'Express', level: 4, category: 'backend' },
    { name: 'PHP', level: 3, category: 'backend' },
    { name: 'Python', level: 4, category: 'backend' },
    
    // Database
    { name: 'MongoDB', level: 4, category: 'database' },
    { name: 'MySQL', level: 4, category: 'database' },
    { name: 'PostgreSQL', level: 3, category: 'database' },
    
    // Languages
    { name: 'C#', level: 4, category: 'languages' },
    { name: 'C++', level: 3, category: 'languages' },
    { name: 'Python', level: 4, category: 'languages' },
    
    // Tools
    { name: 'Git', level: 5, category: 'tools' },
    { name: 'Docker', level: 3, category: 'tools' },
    { name: 'VS Code', level: 5, category: 'tools' },
    { name: 'Figma', level: 3, category: 'tools' },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Bases de Datos' },
    { id: 'languages', name: 'Lenguajes' },
    { id: 'tools', name: 'Herramientas' },
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mis Habilidades
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo para crear soluciones digitales efectivas y modernas.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div 
                      key={`${category.id}-${skill.name}`}
                      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
                    >
                      <div className="flex items-center mb-3">
                        {skill.icon ? (
                          <div className="mr-3 w-10 h-10 flex-shrink-0">
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={40}
                              height={40}
                            />
                          </div>
                        ) : (
                          <div className="mr-3 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-800 dark:text-blue-200 font-semibold">
                              {skill.name.substring(0, 2)}
                            </span>
                          </div>
                        )}
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </h4>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}