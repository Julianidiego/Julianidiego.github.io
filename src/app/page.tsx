import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BlogPreview from '@/components/BlogPreview';
import Reveal from '@/components/Reveal';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal delay={80}><Projects /></Reveal>
        <Reveal delay={120}><Skills /></Reveal>
        <Reveal delay={160}><Experience /></Reveal>
        <Reveal delay={200}><Contact /></Reveal>
        <Reveal delay={240}><BlogPreview /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
