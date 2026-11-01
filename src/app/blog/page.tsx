import Link from 'next/link';
import BlogHeader from '@/components/BlogHeader';
import BlogFooter from '@/components/BlogFooter';
import { blogPosts } from '@/content/blog';

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <div className="blog-page">
      <BlogHeader />
      <main className="page-main">
        <section className="blog-hero">
          <p className="section-index">03 / Notas</p>
          <h1>Aprender en público.</h1>
          <p>
            Un cuaderno abierto sobre desarrollo de software, proyectos personales
            y el proceso de construir una carrera técnica.
          </p>
          <div className="blog-hero__meta">
            <span>{blogPosts.length} entradas</span>
            <span>Lecturas sobre código, carrera y aprendizaje</span>
          </div>
        </section>

        <section className="blog-content">
          <article className="featured-post">
            <div className="featured-post__index">Entrada destacada / 01</div>
            <div className="post-meta">
              <span>{featuredPost.category}</span>
              <time dateTime={featuredPost.date}>{featuredPost.date}</time>
            </div>
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.excerpt}</p>
            <div className="featured-post__footer">
              <span>{featuredPost.readingTime} de lectura</span>
              <Link href={`/blog/${featuredPost.slug}/`} className="text-link">Leer entrada ↗</Link>
            </div>
          </article>
          <div className="blog-list">
            {otherPosts.map((post, index) => (
              <article className="blog-list__item" key={post.slug}>
                <span className="project-number">0{index + 2}</span>
                <div>
                <div className="post-meta">
                  <span>{post.category}</span>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h2><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h2>
                <p>{post.excerpt}</p>
                <div className="blog-list__footer">
                  <span>{post.readingTime} de lectura</span>
                  <Link href={`/blog/${post.slug}/`} className="text-link">Leer entrada →</Link>
                </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  );
}
