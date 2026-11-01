import Link from 'next/link';
import { blogPosts } from '@/content/blog';

export default function BlogPreview() {
  return (
    <section id="blog" className="section-shell section-muted">
      <div className="section-heading">
        <p className="eyebrow">Notas de aprendizaje</p>
        <h2>Ideas, proyectos y progreso.</h2>
        <p>
          Un espacio para compartir lo que estoy construyendo y las lecciones
          que encuentro en el camino.
        </p>
      </div>
      <div className="blog-banner">
        <span className="status-dot" aria-hidden="true" />
        <span>Publicando el proceso: decisiones, aprendizajes y próximos experimentos.</span>
      </div>
      <div className="post-grid">
        {blogPosts.map((post) => (
          <article className="post-card" key={post.slug}>
            <div className="post-meta">
              <span>{post.category}</span>
              <time dateTime={post.date}>
                {new Intl.DateTimeFormat('es-AR', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                }).format(new Date(`${post.date}T12:00:00`))}
              </time>
            </div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}/`} className="text-link">
              Leer entrada <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
      <Link href="/blog/" className="button button-secondary">
        Ver todas las entradas
      </Link>
    </section>
  );
}
