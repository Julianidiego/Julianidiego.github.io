import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/content/blog';

export default function BlogPage() {
  return (
    <div className="site-frame">
      <Navbar />
      <main className="page-main">
        <section className="page-intro">
          <p className="eyebrow">Blog</p>
          <h1>Aprendizaje en público.</h1>
          <p>
            Apuntes sobre desarrollo de software, proyectos personales y el
            proceso de construir una carrera técnica.
          </p>
        </section>
        <section className="section-shell">
          <div className="post-grid">
            {blogPosts.map((post) => (
              <article className="post-card" key={post.slug}>
                <div className="post-meta">
                  <span>{post.category}</span>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <p className="post-reading-time">{post.readingTime} de lectura</p>
                <Link href={`/blog/${post.slug}/`} className="text-link">
                  Leer entrada <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
