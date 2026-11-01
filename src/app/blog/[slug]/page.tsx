import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogHeader from '@/components/BlogHeader';
import BlogFooter from '@/components/BlogFooter';
import { blogPosts } from '@/content/blog';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) notFound();

  return (
    <div className="blog-page">
      <BlogHeader />
      <main className="page-main">
        <article className="article-shell">
          <Link href="/blog/" className="back-link">← Volver a notas</Link>
          <p className="section-index article-index">03 / Notas / {post.category}</p>
          <div className="post-meta">
            <span>{post.category}</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <h1>{post.title}</h1>
          <p className="article-lead">{post.excerpt}</p>
          <div className="article-content">
            {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link href="/blog/" className="button button-quiet article-back-button">Más notas ↗</Link>
        </article>
      </main>
      <BlogFooter />
    </div>
  );
}
