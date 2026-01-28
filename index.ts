import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Returns the maximum price allowed for a given price bracket
function getMaxPrice(price: PriceBracket): number {
  switch (price) {
    case PriceBracket.Low:
      return 10;
    case PriceBracket.Medium:
      return 20;
    case PriceBracket.High:
      return 30;
    default:
      throw new Error("Unknown PriceBracket"); // Safety for unexpected enum values
  }
}

// Filters orders for each restaurant based on the given price bracket
function getOrders(price: PriceBracket, orders: Order[][]): Order[][] {
  const maxPrice = getMaxPrice(price); // Get the threshold for the selected price bracket

  // Filter each restaurant's orders to only include meals at or below maxPrice
  return orders.map(restaurantOrders =>
    restaurantOrders.filter(order => order.price <= maxPrice)
  );
}

// Prints the filtered orders to the console
function printOrders(
  restaurants: Restaurant[],
  filteredOrders: Order[][]
): void {
  filteredOrders.forEach((ordersForRestaurant, index) => {
    const restaurant = restaurants[index]; // Get the corresponding restaurant

    // Skip if restaurant doesn't exist or has no orders within the price bracket
    if (!restaurant || ordersForRestaurant.length === 0) {
      return;
    }

    console.log(restaurant.name);

    // Print each eligible meal under this restaurant
    ordersForRestaurant.forEach(item => {
      console.log(`- ${item.name}: £${item.price}`);
    });
  });
}

// Get all orders that fit within the Low price bracket
const eligibleOrders = getOrders(PriceBracket.Low, orders);

// Print the eligible orders to the console
printOrders(restaurants, eligibleOrders);