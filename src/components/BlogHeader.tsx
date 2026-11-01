'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BlogHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand__mark">DJ</span>
          <span>Diego Juliani</span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="blog-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Cerrar' : 'Menú'}
        </button>
        <nav id="blog-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link href="/#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</Link>
          <Link href="/blog/" className="is-active" onClick={() => setMenuOpen(false)}>Notas</Link>
          <Link href="/#contacto" className="nav-cta" onClick={() => setMenuOpen(false)}>Hablemos</Link>
        </nav>
      </div>
    </header>
  );
}
