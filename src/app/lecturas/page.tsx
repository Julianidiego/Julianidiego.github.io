import Link from 'next/link';
import BlogHeader from '@/components/BlogHeader';
import BlogFooter from '@/components/BlogFooter';
import { readingReviews } from '@/content/reading-data';

export default function ReadingPage() {
  return (
    <div className="blog-page">
      <BlogHeader />
      <main className="page-main">
        <section className="blog-hero reading-hero">
          <p className="section-index">04 / Qué estoy leyendo</p>
          <h1>Libros, manuales y preguntas nuevas.</h1>
          <p>Reseñas breves sobre programación, matemáticas, diseño y las ideas que me ayudan a seguir construyendo.</p>
          <div className="blog-hero__meta"><span>{readingReviews.length} reseñas</span><span>Lecturas técnicas y relacionadas</span></div>
        </section>
        <section className="reading-page-grid">
          {readingReviews.map((book) => (
            <article className="book-card" key={book.slug}>
              <div className="book-cover"><img src={book.cover} alt={`Portada de ${book.title}`} /></div>
              <div className="book-card__body">
                <div className="book-card__meta"><span>{book.category}</span><span className="book-rating" aria-label={`${book.rating} de 5 estrellas`}>{'★'.repeat(book.rating)}<span>{'★'.repeat(5 - book.rating)}</span></span></div>
                <h2>{book.title}</h2>
                <p className="book-author">por {book.author}</p>
                <p>{book.summary}</p>
                <Link href={`/lecturas/${book.slug}/`} className="text-link">Leer reseña →</Link>
              </div>
            </article>
          ))}
        </section>
      </main>
      <BlogFooter />
    </div>
  );
}
