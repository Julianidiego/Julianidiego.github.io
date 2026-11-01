import type { BlogPost } from './blog';

export const blogPostsData: BlogPost[] = [
  {
    slug: 'construir-con-aprendizaje-continuo',
    title: 'Construir mientras aprendo',
    excerpt: 'Cómo estoy convirtiendo ejercicios de estudio en proyectos pequeños, documentados y cada vez más útiles.',
    date: '2026-11-01',
    category: 'Aprendizaje',
    readingTime: '4 min',
    content: [
      'Aprender desarrollo de software no consiste únicamente en terminar cursos. También implica transformar cada concepto en algo que pueda explicar, probar y mejorar.',
      'Por eso estoy organizando mi trabajo en proyectos pequeños: una herramienta, una interfaz o una automatización que resuelva un problema concreto y deje una base para el siguiente paso.',
      'Mi objetivo es que este blog funcione como un registro honesto del proceso: qué intenté, qué falló y qué aprendí.'
    ]
  },
  {
    slug: 'mi-flujo-con-github-y-copilot',
    title: 'Un flujo de trabajo más profesional con GitHub',
    excerpt: 'Ramas, pull requests, tests y documentación: las prácticas que estoy incorporando a mis proyectos.',
    date: '2026-10-28',
    category: 'Desarrollo',
    readingTime: '5 min',
    content: [
      'Un repositorio no es solamente un lugar para guardar código. También es una forma de comunicar decisiones, recibir feedback y demostrar cómo evoluciona un proyecto.',
      'Estoy incorporando ramas pequeñas, pull requests descriptivas, pruebas automatizadas y README que expliquen cómo ejecutar cada proyecto.',
      'El uso responsable de Copilot me ayuda a explorar alternativas más rápido, pero la revisión, las pruebas y las decisiones técnicas siguen siendo parte de mi trabajo.'
    ]
  },
  {
    slug: 'portfolio-que-comunica',
    title: 'Un portfolio que comunica, no solo muestra',
    excerpt: 'La diferencia entre listar tecnologías y contar cómo pienso, construyo y mejoro un producto.',
    date: '2026-10-24',
    category: 'Carrera',
    readingTime: '6 min',
    content: [
      'Un recruiter necesita entender rápidamente qué problema resuelve una persona y cómo trabaja. Por eso un portfolio efectivo no debería ser una galería de logos: debe mostrar contexto, decisiones y resultados.',
      'En este borrador estoy reorganizando mis proyectos para explicar el desafío, el enfoque técnico, lo que aprendí y qué mejoraría en una siguiente versión.',
      'La meta es que cada proyecto funcione como una conversación: una puerta de entrada para hablar de código, producto y colaboración.'
    ]
  },
  {
    slug: 'aprender-typescript-con-proyecto',
    title: 'Aprender TypeScript construyendo una herramienta real',
    excerpt: 'Qué cambia cuando el aprendizaje deja de ser un ejercicio aislado y empieza a tener usuarios, errores y decisiones.',
    date: '2026-10-18',
    category: 'TypeScript',
    readingTime: '5 min',
    content: [
      'TypeScript se entiende mejor cuando los tipos ayudan a proteger un dominio real. En lugar de memorizar sintaxis, estoy usando una pequeña herramienta de consola para modelar entradas, validaciones y resultados.',
      'El trabajo también me obliga a pensar en nombres, límites y mensajes de error. Esas decisiones son tan importantes como escribir una función que compile.',
      'El próximo paso será documentar los casos límite y automatizar la publicación de nuevas versiones.'
    ]
  },
  {
    slug: 'github-pages-como-laboratorio',
    title: 'GitHub Pages como laboratorio personal',
    excerpt: 'Por qué convertir una página personal en un proyecto vivo mejora tanto el código como la forma de presentarlo.',
    date: '2026-10-11',
    category: 'GitHub',
    readingTime: '4 min',
    content: [
      'Una página personal tiene una ventaja especial: permite experimentar en público con una superficie pequeña y un objetivo claro.',
      'Cada cambio puede pasar por una rama, un pull request, una revisión visual y un despliegue. Ese circuito es una práctica concreta de ingeniería, aunque el proyecto sea personal.',
      'Este sitio será mi laboratorio para probar accesibilidad, contenido, automatización y una comunicación técnica más clara.'
    ]
  }
];
