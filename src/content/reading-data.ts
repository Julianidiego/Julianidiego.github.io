import algoritmos from '../../content/reading/algoritmos-construir-ideas.json';
import matematica from '../../content/reading/matematica-para-programar.json';
import interfaces from '../../content/reading/interfaces-que-explican.json';

export type ReadingReview = {
  slug: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  cover: string;
  summary: string;
  review: string;
};

export const readingReviews: ReadingReview[] = [algoritmos, matematica, interfaces];
