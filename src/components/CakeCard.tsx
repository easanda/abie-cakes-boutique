
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Cake } from "@/data/cakes";

interface CakeCardProps {
  cake: Cake;
  className?: string;
}

export default function CakeCard({ cake, className }: CakeCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id: cake.id,
      name: cake.name,
      price: cake.price,
      image: cake.image,
      quantity: quantity,
    });
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}>
      <div className="aspect-square overflow-hidden">
        <img
          src={cake.image}
          alt={cake.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg">{cake.name}</CardTitle>
          <div className="text-lg font-bold text-primary">${cake.price}</div>
        </div>
        <CardDescription className="line-clamp-2 text-sm">
          {cake.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <div className="flex items-center gap-2 w-full">
          <div className="flex items-center border rounded-md">
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8 rounded-none rounded-l-md"
              onClick={decrementQuantity}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="w-8 text-center">{quantity}</span>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8 rounded-none rounded-r-md"
              onClick={incrementQuantity}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          <Button 
            onClick={handleAddToCart}
            className="flex-1"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
        <Link 
          to={`/cakes/${cake.id}`} 
          className="text-sm text-center w-full text-muted-foreground hover:text-primary transition-colors"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
}
