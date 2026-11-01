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

function GitHubGlyph({ type }: { type: 'github' | 'copilot' | 'code' | 'repo' | 'spark' }) {
  if (type === 'github') {
    return <svg className="github-glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.57.1.78-.25.78-.55v-2.14c-3.17.69-3.84-1.34-3.84-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.7.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.95.1-.74.4-1.25.73-1.54-2.53-.29-5.19-1.27-5.19-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.12 1.17a10.7 10.7 0 0 1 5.68 0c2.16-1.48 3.11-1.17 3.11-1.17.62 1.57.23 2.73.12 3.02.73.8 1.17 1.82 1.17 3.07 0 4.39-2.67 5.35-5.21 5.63.41.36.77 1.07.77 2.16v3.18c0 .31.2.66.79.55A11.3 11.3 0 0 0 12 .7Z" /></svg>;
  }
  if (type === 'copilot') {
    return <svg className="github-glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 4.2A4.2 4.2 0 0 1 12 1.8a4.2 4.2 0 0 1 4.8 2.4 4.2 4.2 0 0 1 2.5 7.3v4.3c0 2.5-2 4.5-4.5 4.5h-5.6a4.5 4.5 0 0 1-4.5-4.5v-4.3a4.2 4.2 0 0 1 2.5-7.3Z" /><path d="M8.5 11.3h.01M15.5 11.3h.01M9 15.1c1.7 1.1 4.3 1.1 6 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" /></svg>;
  }
  if (type === 'code') {
    return <svg className="github-glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5l-3 14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>;
  }
  if (type === 'repo') {
    return <svg className="github-glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.5h10.5A3.5 3.5 0 0 1 19 7v13.5H7.5A2.5 2.5 0 0 1 5 18V3.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M5 17.5c0-1.1.9-2 2-2h12M9 7h6M9 10.5h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" /></svg>;
  }
  return <svg className="github-glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" fill="currentColor" /></svg>;
}

function MonaBadge() {
  return (
    <div className="mona-badge" aria-label="Mascota felina inspirada en Mona">
      <div className="mona-badge__ears"><i /><i /></div>
      <div className="mona-badge__face">
        <span className="mona-badge__eye" />
        <span className="mona-badge__eye" />
        <b />
      </div>
      <span className="mona-badge__tail" />
      <span className="mona-badge__spark"><GitHubGlyph type="spark" /></span>
    </div>
  );
}

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
            <span className="brand__mark"><GitHubGlyph type="github" /></span>
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
              <p className="kicker"><span className="pulse-dot" /> Disponible para aprender y construir <span className="kicker__badge">open to work</span></p>
              <h1>Desarrollo software con curiosidad, criterio y propósito.</h1>
              <p className="hero-lead">
                Soy Diego Juliani, estudiante de desarrollo de software en la UNLP.
                Exploro cómo convertir ideas en herramientas útiles, interfaces claras y
                proyectos que cuentan una historia.
              </p>
              <div className="hero-actions">
                <Link href="#proyectos" className="button button-primary">Ver proyectos <span>↘</span></Link>
                <a href="https://github.com/Julianidiego" target="_blank" rel="noreferrer" className="button button-quiet"><GitHubGlyph type="github" /> GitHub ↗</a>
              </div>
              <div className="hero-meta">
                <span>Buenos Aires, Argentina</span>
                <span>Estudiante · Creador · Aprendiz</span>
              </div>
            </div>
            <div className="hero-art" aria-label="Perfil técnico de Diego Juliani">
              <div className="hero-art__grid" />
              <div className="hero-art__ring hero-art__ring--outer" />
              <div className="hero-art__ring hero-art__ring--inner" />
              <div className="hero-art__core">
                <MonaBadge />
                <small>build / learn / repeat</small>
              </div>
              <div className="hero-art__label hero-art__label--top"><GitHubGlyph type="copilot" /> PORTFOLIO / 2026</div>
              <div className="hero-art__label hero-art__label--bottom"><GitHubGlyph type="code" /> ARG · UNLP</div>
              <div className="hero-art__float hero-art__float--one"><GitHubGlyph type="repo" /></div>
              <div className="hero-art__float hero-art__float--two"><GitHubGlyph type="copilot" /></div>
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
              <p className="section-index">02 / Proyectos seleccionados <span className="section-icon"><GitHubGlyph type="repo" /></span></p>
              <h2>Trabajo que se puede abrir, leer y mejorar.</h2>
            </div>
            <a href="https://github.com/Julianidiego?tab=repositories" target="_blank" rel="noreferrer" className="text-link">Ver todos en GitHub ↗</a>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project-row" href={project.href} target="_blank" rel="noreferrer" key={project.number}>
                <span className="project-number">{project.number}<GitHubGlyph type="repo" /></span>
                <div className="project-main">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <span className="project-arrow"><GitHubGlyph type="code" /></span>
              </a>
            ))}
          </div>
        </section>

        <section id="notas" data-section="notas" className="content-section notes-section reveal-section">
          <div className="section-heading-row">
            <div>
              <p className="section-index">03 / Notas <span className="section-icon"><GitHubGlyph type="code" /></span></p>
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
            <p className="section-index">05 / Contacto <span className="section-icon"><GitHubGlyph type="copilot" /></span></p>
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
