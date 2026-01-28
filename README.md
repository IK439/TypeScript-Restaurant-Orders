# TypeScript-Restaurant-Orders

## Description
This program filters restaurant orders based on a selected price bracket (Low, Medium, or High). It iterates through each restaurant's menu and only includes meals that fall within the chosen price range. The filtered orders are then printed to the console, organized by restaurant.

## Coding Techniques
- Enums to represent price brackets (`PriceBracket`)
- Array filtering using `Array.prototype.filter` for multi-criteria selection
- Mapping over nested arrays to process multiple restaurants
- TypeScript type annotations for strong typing (`Restaurant` and `Order`)
- Template literals for dynamic console output
- Modular code structure with imports and exports
- Safety checks for unexpected enum values and empty order arrays
- Separation of concerns: filtering logic and printing logic are handled by separate functions

## Example Output
```
Green Garden Bowl 🥗
- Vegan Buddha Bowl: £8.49
- Quinoa Salad: £7.99
- Avocado Toast: £6.99
The Wrap & Sandwich 🥪
- BBQ Pulled Pork Sandwich: £9.99
- Buffalo Cauliflower Bites: £9.49
Bagel Bros 🥯
- Bagel with Cream Cheese: £5.49
- Egg and Cheese Bagel: £4.99
- Smoked Salmon Bagel: £9.49
Dim Sum Delight 🥟
- Dim Sum Platter: £9.99
- Steamed Pork Buns: £8.49
- Shrimp Har Gow: £9.99
```
