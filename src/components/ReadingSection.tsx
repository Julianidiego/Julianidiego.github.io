import Link from 'next/link';
import { readingReviews } from '@/content/reading-data';

function Rating({ value }: { value: number }) {
  return (
    <span className="book-rating" aria-label={`${value} de 5 estrellas`}>
      {'★'.repeat(value)}<span>{'★'.repeat(5 - value)}</span>
    </span>
  );
}

export default function ReadingSection() {
  return (
    <section id="lecturas" data-section="lecturas" className="content-section reading-section reveal-section">
      <div className="section-heading-row">
        <div>
          <p className="section-index">04 / Qué estoy leyendo</p>
          <h2>Ideas que siguen trabajando después de cerrar el libro.</h2>
        </div>
        <Link href="/lecturas/" className="text-link">Ver todas las reseñas ↗</Link>
      </div>
      <div className="reading-grid">
        {readingReviews.map((book) => (
          <article className="book-card" key={book.slug}>
            <div className="book-cover">
              <img src={book.cover} alt={`Portada de ${book.title}`} />
            </div>
            <div className="book-card__body">
              <div className="book-card__meta"><span>{book.category}</span><Rating value={book.rating} /></div>
              <h3>{book.title}</h3>
              <p className="book-author">por {book.author}</p>
              <p>{book.summary}</p>
              <Link href={`/lecturas/${book.slug}/`} className="text-link">Leer reseña →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
