
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-25 dark:opacity-10">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-cake-100 to-transparent dark:from-cake-950 dark:to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cake-100 to-transparent dark:from-cake-950 dark:to-transparent"></div>
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cake-200 via-transparent to-transparent dark:from-cake-900 dark:via-transparent dark:to-transparent opacity-70"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Handcrafted Cakes for Every Occasion
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
            Indulge in our exquisite range of freshly baked cakes made with premium ingredients and lots of love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="text-base">
              <Link to="/cakes">
                Browse Our Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/contact">
                Custom Order
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
