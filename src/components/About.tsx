
import { useEffect, useRef } from "react";

export default function About() {
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
    <section className="py-16" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-on-scroll translate-y-10">
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551404973-761c83cd8339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Abie preparing cakes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-lg overflow-hidden border-4 border-background shadow-lg hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1608127010513-3c78b1df9899?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoZWYlMjBiYWtpbmd8ZW58MHx8MHx8fDA%3D"
                  alt="Close up of cake preparation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll translate-y-10" style={{ transitionDelay: "150ms" }}>
            <h2 className="text-3xl font-bold mb-4">About Abie</h2>
            <p className="text-muted-foreground mb-4">
              Abie Cakes Boutique was founded in 2018 with a simple mission: to create delicious, 
              beautiful cakes that bring joy to every celebration.
            </p>
            <p className="text-muted-foreground mb-4">
              Our pastry chef, Abie, trained at the prestigious Le Cordon Bleu and has over 10 years 
              of experience crafting exquisite desserts. Every cake is made from scratch using only 
              the finest ingredients, from Madagascar vanilla to Belgian chocolate.
            </p>
            <p className="text-muted-foreground">
              We believe that every occasion deserves something special, which is why we put so much 
              care and attention into each of our creations. From birthdays to weddings, our cakes 
              are designed to be the centerpiece of your celebration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
