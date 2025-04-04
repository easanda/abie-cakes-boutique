
export interface Cake {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

export const cakes: Cake[] = [
  {
    id: "1",
    name: "Chocolate Truffle",
    price: 35,
    description: "Rich chocolate cake with layers of chocolate ganache and truffle filling.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "chocolate",
    featured: true
  },
  {
    id: "2",
    name: "Strawberry Bliss",
    price: 30,
    description: "Light vanilla sponge with fresh strawberries and cream.",
    image: "https://images.unsplash.com/photo-1635342219731-30fa92174de5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN0cmF3YmVycnklMjBjYWtlfGVufDB8fDB8fHww",
    category: "fruit",
    featured: true
  },
  {
    id: "3",
    name: "Red Velvet Dream",
    price: 32,
    description: "Classic red velvet cake with cream cheese frosting.",
    image: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "classic",
    featured: true
  },
  {
    id: "4",
    name: "Lemon Raspberry",
    price: 28,
    description: "Zesty lemon cake with raspberry filling and buttercream.",
    image: "https://images.unsplash.com/photo-1627308595171-d1b5d95d0511?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxlbW9uJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "fruit"
  },
  {
    id: "5",
    name: "Caramel Macchiato",
    price: 34,
    description: "Coffee-infused cake with caramel drizzle and espresso buttercream.",
    image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "coffee"
  },
  {
    id: "6",
    name: "Vanilla Celebration",
    price: 26,
    description: "Light vanilla cake with rainbow sprinkles and vanilla buttercream.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZhbmlsbGElMjBjYWtlfGVufDB8fDB8fHww",
    category: "classic"
  },
  {
    id: "7",
    name: "Matcha Green Tea",
    price: 38,
    description: "Delicate matcha-infused cake with white chocolate ganache.",
    image: "https://images.unsplash.com/photo-1634118520179-0c78b72df69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0Y2hhJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "specialty"
  },
  {
    id: "8",
    name: "Black Forest",
    price: 36,
    description: "Chocolate layers with cherries, whipped cream, and chocolate shavings.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBmb3Jlc3QlMjBjYWtlfGVufDB8fDB8fHww",
    category: "chocolate"
  }
];

export const categories = [
  { id: "all", name: "All Cakes" },
  { id: "chocolate", name: "Chocolate" },
  { id: "fruit", name: "Fruit" },
  { id: "classic", name: "Classic" },
  { id: "coffee", name: "Coffee" },
  { id: "specialty", name: "Specialty" }
];
