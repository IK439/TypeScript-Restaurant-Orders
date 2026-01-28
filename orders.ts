export enum PriceBracket {
  Low, // £0 - £10
  Medium, // £10 - £20
  High, // £20 - £30
}

export const orders = [
  [
    { name: "Vegan Buddha Bowl", price: 8.49 },
    { name: "Quinoa Salad", price: 7.99 },
    { name: "Avocado Toast", price: 6.99 },
  ],
  [
    { name: "BBQ Pulled Pork Sandwich", price: 9.99 },
    { name: "Caesar Chicken Wrap", price: 10.49 },
    { name: "Buffalo Cauliflower Bites", price: 9.49 },
  ],
  [
    { name: "Seafood Paella", price: 18.99 },
    { name: "Beef Wellington", price: 19.49 },
    { name: "Lobster Mac & Cheese", price: 17.99 },
  ],
  [
    { name: "Bagel with Cream Cheese", price: 5.49 },
    { name: "Egg and Cheese Bagel", price: 4.99 },
    { name: "Smoked Salmon Bagel", price: 9.49 },
  ],
  [
    { name: "Dim Sum Platter", price: 9.99 },
    { name: "Steamed Pork Buns", price: 8.49 },
    { name: "Shrimp Har Gow", price: 9.99 },
  ],
];

export type Order = (typeof orders)[0][0];