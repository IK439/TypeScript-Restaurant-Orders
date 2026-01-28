import { PriceBracket } from "./orders";

export const restaurants = [
  {
    name: "Green Garden Bowl 🥗",
    priceBracket: PriceBracket.Low,
    deliveryTimeMinutes: 25,
    openHour: "10",
    closeHour: "22",
    distance: "5",
  },
  {
    name: "The Wrap & Sandwich 🥪",
    priceBracket: PriceBracket.Low,
    deliveryTimeMinutes: 20,
    openHour: "11",
    closeHour: "21",
    distance: "8",
  },
  {
    name: "Mediterraneo 🍤",
    priceBracket: PriceBracket.Medium,
    deliveryTimeMinutes: 50,
    openHour: "17",
    closeHour: "23",
    distance: "3",
  },
  {
    name: "Bagel Bros 🥯",
    priceBracket: PriceBracket.Low,
    deliveryTimeMinutes: 15,
    openHour: "6",
    closeHour: "14",
    distance: "2",
  },
  {
    name: "Dim Sum Delight 🥟",
    priceBracket: PriceBracket.Low,
    deliveryTimeMinutes: 20,
    openHour: "12",
    closeHour: "22",
    distance: "12",
  },
];

export type Restaurant = (typeof restaurants)[0];