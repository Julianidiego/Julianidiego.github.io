import Link from 'next/link';

export default function BlogFooter() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Diego Juliani</span>
      <span><Link href="/">Volver al portfolio</Link> · Hecho con curiosidad y código.</span>
    </footer>
  );
}
