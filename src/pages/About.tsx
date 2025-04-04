
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
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
    <div className="min-h-screen pt-16">
      <Navbar />
      
      <div className="container py-10">
        <div className="text-center mb-10 animate-on-scroll translate-y-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Abie</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know our story and passion for creating delicious cakes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="animate-on-scroll translate-y-10">
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Our bakery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="animate-on-scroll translate-y-10" style={{ transitionDelay: "150ms" }}>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Abie Cakes Boutique was founded in 2018 by Abigail Johnson, a passionate 
                  pastry chef who dreamed of sharing her love for baking with the world. 
                  After years of baking for family and friends, she decided to turn her 
                  hobby into a business.
                </p>
                <p className="text-muted-foreground">
                  What started as a small home-based bakery has grown into one of the city's 
                  most beloved cake shops, known for our attention to detail, high-quality 
                  ingredients, and stunning designs that taste as good as they look.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 animate-on-scroll translate-y-10" style={{ transitionDelay: "150ms" }}>
                <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <div>
                      <h3 className="font-medium">Quality Ingredients</h3>
                      <p className="text-muted-foreground text-sm">
                        We use only the finest ingredients, from Madagascar vanilla to Belgian chocolate.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <div>
                      <h3 className="font-medium">Handcrafted with Care</h3>
                      <p className="text-muted-foreground text-sm">
                        Each cake is made by hand with attention to every detail.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <div>
                      <h3 className="font-medium">Personalized Service</h3>
                      <p className="text-muted-foreground text-sm">
                        We work with you to create the perfect cake for your special occasion.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="bg-primary/20 rounded-full p-1 mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <div>
                      <h3 className="font-medium">Community Focus</h3>
                      <p className="text-muted-foreground text-sm">
                        We source locally when possible and give back to our community.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="order-1 md:order-2 animate-on-scroll translate-y-10">
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1605291021686-8063afc7aca1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGJha2luZyUyMGNha2V8ZW58MHx8MHx8fDA%3D"
                    alt="Cake making process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
          
          <section className="animate-on-scroll translate-y-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="aspect-square rounded-full overflow-hidden w-36 h-36 mx-auto mb-4 border-4 border-background shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1580651214613-f4692d6d138f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoZWZ8ZW58MHx8MHx8fDA%3D"
                    alt="Abigail Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium">Abigail Johnson</h3>
                <p className="text-sm text-primary">Founder & Head Pastry Chef</p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square rounded-full overflow-hidden w-36 h-36 mx-auto mb-4 border-4 border-background shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGNoZWZ8ZW58MHx8MHx8fDA%3D"
                    alt="Michael Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium">Michael Chen</h3>
                <p className="text-sm text-primary">Cake Designer</p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square rounded-full overflow-hidden w-36 h-36 mx-auto mb-4 border-4 border-background shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1574966739987-67e66315a229?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNoZWZ8ZW58MHx8MHx8fDA%3D"
                    alt="Sofia Rodriguez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium">Sofia Rodriguez</h3>
                <p className="text-sm text-primary">Assistant Baker</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
