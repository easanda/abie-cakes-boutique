
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Home, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function OrderSuccess() {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <div className="container py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/20 mb-6">
            <Check className="h-10 w-10 text-primary" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Your Order!</h1>
          <p className="text-muted-foreground mb-6">
            Your order #{orderNumber} has been successfully placed. We've sent a confirmation 
            email with all the details.
          </p>
          
          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-lg font-medium mb-4">What happens next?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-medium">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Order Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll start preparing your cake fresh for your requested date.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-medium">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Ready for Pickup/Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll notify you when your order is ready for pickup or out for delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Homepage
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <Link to="/orders">
                <Package className="mr-2 h-4 w-4" />
                View My Orders
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
