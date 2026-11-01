import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/content/blog';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) notFound();

  return (
    <div className="site-frame">
      <Navbar />
      <main className="page-main">
        <article className="article-shell">
          <Link href="/blog/" className="back-link">← Volver al blog</Link>
          <div className="post-meta">
            <span>{post.category}</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <h1>{post.title}</h1>
          <p className="article-lead">{post.excerpt}</p>
          <div className="article-content">
            {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
