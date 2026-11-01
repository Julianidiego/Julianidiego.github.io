'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { blogPostsData } from '@/content/blog-data';
import ReadingSection from '@/components/ReadingSection';

const projects = [
  {
    number: '01',
    title: 'Bookmark Manager CLI',
    description: 'Herramienta TypeScript para validar, ordenar y exportar marcadores desde la terminal.',
    tags: ['TypeScript', 'Node.js', 'Vitest'],
    href: 'https://github.com/Julianidiego/copilot-bookmark-cli',
  },
  {
    number: '02',
    title: 'Velocímetro de incendios',
    description: 'Visualización web de datos para comunicar el riesgo de incendios forestales de forma clara.',
    tags: ['JavaScript', 'Datos', 'Web'],
    href: 'https://github.com/Julianidiego/Velocimetro_Incendios_Forestales',
  },
  {
    number: '03',
    title: 'Gestión de certificados',
    description: 'Proyecto web orientado a organizar y consultar certificaciones en un flujo sencillo.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    href: 'https://github.com/Julianidiego/GESTION-DE-CERTIFICADOS',
  },
];

const skills = ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java', 'Git', 'GitHub', 'Web'];

export default function PortfolioHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            setActiveSection((entry.target as HTMLElement).dataset.section ?? 'inicio');
          }
        });
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-page">
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="#inicio" className="brand" onClick={closeMenu}>
            <span className="brand__mark">DJ</span>
            <span>Diego Juliani</span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>{menuOpen ? 'Cerrar' : 'Menú'}</span>
          </button>
          <nav id="primary-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
            {[
              ['inicio', 'Inicio'],
              ['sobre-mi', 'Sobre mí'],
              ['proyectos', 'Proyectos'],
              ['notas', 'Notas'],
              ['lecturas', 'Lecturas'],
            ].map(([id, label]) => (
              <Link
                key={id}
                href={`#${id}`}
                className={activeSection === id ? 'is-active' : ''}
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}
            <Link href="#contacto" className="nav-cta" onClick={closeMenu}>Hablemos</Link>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" data-section="inicio" className="hero-section reveal-section is-visible">
          <div className="hero-section__grid">
            <div className="hero-copy">
              <p className="kicker"><span className="pulse-dot" /> Disponible para aprender y construir</p>
              <h1>Desarrollo software con curiosidad, criterio y propósito.</h1>
              <p className="hero-lead">
                Soy Diego Juliani, estudiante de desarrollo de software en la UNLP.
                Exploro cómo convertir ideas en herramientas útiles, interfaces claras y
                proyectos que cuentan una historia.
              </p>
              <div className="hero-actions">
                <Link href="#proyectos" className="button button-primary">Ver proyectos <span>↘</span></Link>
                <a href="https://github.com/Julianidiego" target="_blank" rel="noreferrer" className="button button-quiet">GitHub ↗</a>
              </div>
              <div className="hero-meta">
                <span>Buenos Aires, Argentina</span>
                <span>Estudiante · Creador · Aprendiz</span>
              </div>
            </div>
            <div className="hero-art" aria-label="Perfil técnico de Diego Juliani">
              <div className="hero-art__ring hero-art__ring--outer" />
              <div className="hero-art__ring hero-art__ring--inner" />
              <div className="hero-art__core">
                <span>DJ</span>
                <small>build / learn / repeat</small>
              </div>
              <div className="hero-art__label hero-art__label--top">PORTFOLIO / 2026</div>
              <div className="hero-art__label hero-art__label--bottom">ARG · UNLP</div>
            </div>
          </div>
          <div className="scroll-hint"><span /> Desplazar para explorar</div>
        </section>

        <section id="sobre-mi" data-section="sobre-mi" className="content-section reveal-section">
          <div className="section-intro">
            <p className="section-index">01 / Sobre mí</p>
            <h2>Estoy construyendo una base sólida, proyecto a proyecto.</h2>
          </div>
          <div className="about-grid">
            <div className="about-statement">
              <p>
                Mi foco está en aprender los fundamentos que hacen que un producto sea
                útil: lógica, comunicación, datos, accesibilidad y una buena experiencia.
              </p>
              <p>
                Combino formación académica, práctica personal y documentación para
                avanzar con método. También soy voluntario de bomberos, una experiencia
                que reforzó mi capacidad para colaborar y actuar con responsabilidad.
              </p>
            </div>
            <div className="about-facts">
              <div><span>Formación</span><strong>UNLP · Desarrollo de software</strong></div>
              <div><span>Ahora explorando</span><strong>Algoritmos · TypeScript · Web</strong></div>
              <div><span>Cómo trabajo</span><strong>Pequeño, probado y documentado</strong></div>
            </div>
          </div>
          <div className="skill-strip">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section id="proyectos" data-section="proyectos" className="content-section projects-section reveal-section">
          <div className="section-heading-row">
            <div>
              <p className="section-index">02 / Proyectos seleccionados</p>
              <h2>Trabajo que se puede abrir, leer y mejorar.</h2>
            </div>
            <a href="https://github.com/Julianidiego?tab=repositories" target="_blank" rel="noreferrer" className="text-link">Ver todos en GitHub ↗</a>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project-row" href={project.href} target="_blank" rel="noreferrer" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-main">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <span className="project-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section id="notas" data-section="notas" className="content-section notes-section reveal-section">
          <div className="section-heading-row">
            <div>
              <p className="section-index">03 / Notas</p>
              <h2>Aprender en público.</h2>
            </div>
            <Link href="/blog/" className="text-link">Abrir el blog ↗</Link>
          </div>
          <div className="notes-grid">
            {blogPostsData.slice(0, 3).map((post, index) => (
              <Link href={`/blog/${post.slug}/`} className="note-card" key={post.slug}>
                <div className="note-card__top"><span>0{index + 1}</span><span>{post.category}</span></div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="text-link">Leer nota →</span>
              </Link>
            ))}
          </div>
        </section>
        <ReadingSection />

        <section id="contacto" data-section="contacto" className="contact-section reveal-section">
          <div>
            <p className="section-index">05 / Contacto</p>
            <h2>¿Construimos algo con sentido?</h2>
            <p>Estoy abierto a conversar sobre proyectos, aprendizaje y oportunidades para crecer.</p>
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/julianidiego" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a href="https://github.com/Julianidiego" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Diego Juliani</span>
        <span>Hecho con curiosidad y código.</span>
      </footer>
    </div>
  );
}
