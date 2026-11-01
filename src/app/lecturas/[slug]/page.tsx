import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogHeader from '@/components/BlogHeader';
import BlogFooter from '@/components/BlogFooter';
import { readingReviews } from '@/content/reading-data';

export function generateStaticParams() {
  return readingReviews.map((book) => ({ slug: book.slug }));
}

export default function ReadingReviewPage({ params }: { params: { slug: string } }) {
  const book = readingReviews.find((item) => item.slug === params.slug);
  if (!book) notFound();

  return (
    <div className="blog-page">
      <BlogHeader />
      <main className="page-main">
        <article className="review-shell">
          <Link href="/lecturas/" className="back-link">← Volver a lecturas</Link>
          <div className="review-layout">
            <div className="book-cover book-cover--large"><img src={book.cover} alt={`Portada de ${book.title}`} /></div>
            <div>
              <p className="section-index">04 / Qué estoy leyendo / {book.category}</p>
              <h1>{book.title}</h1>
              <p className="book-author">por {book.author}</p>
              <div className="book-rating" aria-label={`${book.rating} de 5 estrellas`}>{'★'.repeat(book.rating)}<span>{'★'.repeat(5 - book.rating)}</span></div>
              <p className="article-lead">{book.summary}</p>
            </div>
          </div>
          <div className="article-content"><p>{book.review}</p></div>
          <Link href="/lecturas/" className="button button-quiet article-back-button">Más reseñas ↗</Link>
        </article>
      </main>
      <BlogFooter />
    </div>
  );
}
