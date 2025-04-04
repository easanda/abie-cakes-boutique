
import { useState, useEffect } from "react";
import { cakes, categories } from "@/data/cakes";
import CakeCard from "@/components/CakeCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Cakes() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCakes, setFilteredCakes] = useState(cakes);

  useEffect(() => {
    const filtered = cakes.filter(cake => {
      const matchesCategory = selectedCategory === "all" || cake.category === selectedCategory;
      const matchesSearch = cake.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            cake.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
    
    setFilteredCakes(filtered);
  }, [selectedCategory, searchTerm]);

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
  }, [filteredCakes]);

  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      
      <div className="container py-10">
        <div className="text-center mb-10 animate-on-scroll translate-y-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Cake Collection</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our selection of handcrafted cakes made with the finest ingredients.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4 animate-on-scroll translate-y-10">
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 md:gap-3 max-w-full">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          <div className="relative min-w-[240px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search cakes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        {filteredCakes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCakes.map((cake, index) => (
              <div 
                key={cake.id} 
                className="animate-on-scroll translate-y-10"
                style={{ transitionDelay: `${index % 4 * 100}ms` }}
              >
                <CakeCard cake={cake} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 animate-on-scroll translate-y-10">
            <h3 className="text-lg font-medium mb-2">No cakes found</h3>
            <p className="text-muted-foreground">
              Try changing your search or filter criteria.
            </p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
