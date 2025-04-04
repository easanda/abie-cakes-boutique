
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cakes } from "@/data/cakes";
import CakeCard from "./CakeCard";
import { Button } from "@/components/ui/button";

export default function FeaturedCakes() {
  const featuredCakes = cakes.filter(cake => cake.featured);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <section className="py-16 bg-secondary/50 dark:bg-secondary/20" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-10 animate-on-scroll translate-y-10">
          <h2 className="text-3xl font-bold mb-4">Featured Cakes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular creations, handcrafted with love and the finest ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredCakes.map((cake, index) => (
            <div 
              key={cake.id}
              className="animate-on-scroll translate-y-10"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CakeCard cake={cake} />
            </div>
          ))}
        </div>
        
        <div className="text-center animate-on-scroll translate-y-10">
          <Button asChild variant="outline">
            <Link to="/cakes">View All Cakes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
