import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Scalevo Labs",
  "url": "https://scalevolabs.com",
  "logo": "https://scalevolabs.com/Logo.png",
  "description": "Scalevo Labs creates beautiful, high-performance digital solutions including web development, mobile apps, UI/UX design, and cloud services.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1 (555) 123-4567",
    "contactType": "customer service",
    "email": "hello@scalevolabs.com"
  },
  "sameAs": [
    "https://twitter.com/scalevolabs",
    "https://linkedin.com/company/scalevolabs",
    "https://github.com/scalevolabs"
  ],
  "services": [
    "Web Development",
    "Mobile Apps", 
    "UI/UX Design",
    "Cloud Solutions",
    "API Development",
    "Database Solutions",
    "DevOps & Cloud",
    "AI & Machine Learning"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <main role="main" id="main-content">
          <Hero />
          <About />
          <Services />
          <Process />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
