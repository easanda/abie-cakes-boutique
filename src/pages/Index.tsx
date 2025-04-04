
import Banner from "@/components/Banner";
import FeaturedCakes from "@/components/FeaturedCakes";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // Initialize animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <main className="min-h-screen pt-16">
      <Banner />
      <FeaturedCakes />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
