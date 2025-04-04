
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      
      <div className="container py-10">
        <div className="text-center mb-10 animate-on-scroll translate-y-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our cakes or want to place a custom order? We'd love to hear from you!
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-on-scroll translate-y-10">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane.doe@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Custom Cake Order"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your order or question"
                    className="min-h-[150px]"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="animate-on-scroll translate-y-10" style={{ transitionDelay: "150ms" }}>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="bg-card shadow rounded-lg p-6 h-full">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@abiecakes.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        123 Bakery Street<br />
                        Caketown, CT 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9am - 6pm<br />
                        Saturday: 10am - 4pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 aspect-video w-full rounded-lg overflow-hidden border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215279163529!2d-73.98656428459459!3d40.75810797932695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1617998115063!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Abie Cakes Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-secondary/50 dark:bg-secondary/20 rounded-lg p-8 animate-on-scroll translate-y-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Custom Orders</h2>
            <p className="text-center mb-6">
              Looking for a custom cake for your special occasion? Contact us at least 1 week in advance 
              for wedding cakes and 48 hours for birthday and other celebration cakes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <h3 className="font-medium mb-2">Wedding Cakes</h3>
                <p className="text-sm text-muted-foreground">
                  Book a tasting consultation at least 1-3 months before your big day.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <h3 className="font-medium mb-2">Birthday Cakes</h3>
                <p className="text-sm text-muted-foreground">
                  Order at least 48 hours in advance for custom designs.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <h3 className="font-medium mb-2">Corporate Orders</h3>
                <p className="text-sm text-muted-foreground">
                  Contact us for bulk orders and corporate events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
