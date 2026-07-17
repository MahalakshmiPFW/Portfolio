// Representative subset of Crescendo Coffee & Café's public menu, used to
// power the redesigned menu/order flow prototype. Prices/items sourced from
// crescendocoffeecafe.com/menu (July 2026).
import type { Category, MenuItem } from './types';

export const CATEGORIES: Category[] = [
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'lunch', label: 'Lunch & Salads' },
  { id: 'flatbreads', label: 'Flatbreads' },
  { id: 'sandwiches', label: 'Sandwiches' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'signature', label: 'Signature Drinks' },
  { id: 'lotus', label: 'Lotus Energy' },
  { id: 'sweets', label: 'Sweets' },
  { id: 'kids', label: 'Kids' },
];

const sizeSet = (a: number, b: number, c: number) => ([
  { label: '12 oz', price: a },
  { label: '16 oz', price: b },
  { label: '20 oz', price: c },
]);

export const ITEMS: MenuItem[] = [
  // Breakfast
  { id: 'bagel', category: 'breakfast', name: 'Toasted Bagel', desc: 'Plain, everything, or cheese — with your choice of cream cheese.', price: 5.00, tags: ['veg'], addOns: [{ label: 'Gluten-free bagel', price: 1.00 }] },
  { id: 'avotoast', category: 'breakfast', name: 'Avocado Toast', desc: 'Sourdough, arugula, lemon confit, everything seasoning.', tags: ['veg'], sizes: [{ label: 'Half', price: 6.00 }, { label: 'Full', price: 10.00 }], addOns: [{ label: 'Add poached egg', price: 2.00 }] },
  { id: 'biscuitsgravy', category: 'breakfast', name: 'Biscuits & Gravy', desc: 'White sausage gravy over buttermilk biscuits.', sizes: [{ label: 'Half', price: 6.00 }, { label: 'Full', price: 10.00 }] },
  { id: 'eggsandwich', category: 'breakfast', name: 'Egg & Cheese Breakfast Sandwich', desc: 'Egg & white cheddar on your choice of bread.', price: 6.50, addOns: [{ label: 'Add bacon or sausage', price: 2.00 }, { label: 'Add avocado mash', price: 1.00 }] },
  { id: 'hamswiss', category: 'breakfast', name: 'Ham & Swiss Croissant', desc: 'Ham, Swiss, butter, Dijon mustard.', price: 8.50 },
  { id: 'acai', category: 'breakfast', name: 'Crescendo Acai Bowl', desc: 'Peanut butter drizzle, blueberry, banana, strawberry, coconut, granola, cashew crumble.', price: 12.00, tags: ['veg'] },
  { id: 'breakfastbowl', category: 'breakfast', name: 'Breakfast Bowl', desc: 'Scrambled eggs, hashbrowns, cheddar, chorizo, pico de gallo, avocado mash.', price: 11.00 },

  // Lunch & Salads
  { id: 'caesar', category: 'lunch', name: 'Chicken Caesar Salad', desc: 'Romaine, Parmesan, croutons, caesar dressing.', price: 12.00 },
  { id: 'chefsalad', category: 'lunch', name: 'Crescendo Chef Salad', desc: 'Mixed greens, egg, tomato, turkey, avocado mash, bacon, cheddar, blue cheese.', price: 13.00 },
  { id: 'salmonbowl', category: 'lunch', name: 'Salmon Bowl', desc: 'Smoked salmon, jasmine rice, pickled veg, sriracha mayo, avocado.', price: 14.00 },
  { id: 'peanutchicken', category: 'lunch', name: 'Peanut Chicken Bowl', desc: 'Jasmine rice, roasted peanut vinaigrette, cucumber, carrots, chili-garlic.', price: 13.00 },
  { id: 'byosalad', category: 'lunch', name: 'Build Your Own Salad', desc: 'Pick a base, up to six toppings, and a dressing.', price: 12.00, tags: ['veg'], addOns: [{ label: 'Add protein', price: 2.00 }] },

  // Flatbreads
  { id: 'margherita', category: 'flatbreads', name: 'Margherita Flatbread', desc: 'Mozzarella, olive oil, pesto, tomatoes, basil, balsamic drizzle.', price: 13.00, tags: ['veg'] },
  { id: 'bbqchicken', category: 'flatbreads', name: 'Chicken Bacon Ranch Flatbread', desc: 'Roasted chicken, bacon, ranch, mozzarella, red onion.', price: 13.00 },
  { id: 'hothoney', category: 'flatbreads', name: 'Hot Honey Flatbread', desc: 'Pepperoni, hot honey drizzle, tomato sauce, mozzarella.', price: 13.00 },

  // Sandwiches
  { id: 'club', category: 'sandwiches', name: 'Crescendo Club', desc: 'Turkey, ham, bacon, Swiss, lettuce, tomato, honey mustard, wheat bread.', price: 13.00 },
  { id: 'caprese', category: 'sandwiches', name: 'Caprese', desc: 'Mozzarella, arugula, basil-marinated tomatoes, pesto, balsamic glaze.', price: 13.00, tags: ['veg'] },
  { id: 'philly', category: 'sandwiches', name: 'Philly Cheese', desc: 'Roast beef, roasted red peppers, onions, mushrooms, white cheddar, garlic aioli.', price: 13.00 },
  { id: 'cuban', category: 'sandwiches', name: 'Cuban', desc: 'Ham, Swiss, pickles, whole grain mustard, mayo, baguette.', price: 13.00 },

  // Coffee
  { id: 'latte', category: 'coffee', name: 'Latte', desc: 'Espresso, steamed milk.', sizes: sizeSet(4.75, 5.25, 5.75), addOns: [{ label: 'Alternative milk', price: 0.50 }, { label: 'Flavor syrup', price: 0.50 }] },
  { id: 'cappuccino', category: 'coffee', name: 'Cappuccino', desc: 'Espresso, steamed milk, deep foam.', sizes: sizeSet(4.75, 5.25, 5.75), addOns: [{ label: 'Alternative milk', price: 0.50 }] },
  { id: 'coldbrew', category: 'coffee', name: 'Cold Brew', desc: 'Slow-steeped, smooth and bold.', sizes: sizeSet(4.00, 4.50, 4.75), addOns: [{ label: 'Cold foam', price: 1.00 }] },
  { id: 'macchiato', category: 'coffee', name: 'Caramel Macchiato', desc: 'Espresso, vanilla, caramel drizzle.', sizes: sizeSet(5.25, 5.75, 6.25) },
  { id: 'americano', category: 'coffee', name: 'Americano', desc: 'Espresso, hot water.', sizes: sizeSet(2.75, 3.25, 3.75) },

  // Signature Drinks
  { id: 'blackberrycb', category: 'signature', name: 'Blackberry Cold Brew', desc: 'Cold brew, blackberry.', sizes: sizeSet(5.75, 6.00, 6.25) },
  { id: 'lavenderfog', category: 'signature', name: 'Lavender Long Fog', desc: 'Espresso, lavender, milk, honey.', sizes: sizeSet(6.00, 6.50, 7.00) },
  { id: 'seasalthoney', category: 'signature', name: 'Sea Salt Honey Latte', desc: 'Espresso, honey, sea salt cold foam.', sizes: sizeSet(5.75, 6.25, 6.75) },
  { id: 'brownsugar', category: 'signature', name: 'Brown Sugar Oatmilk Shaken Espresso', desc: 'Shaken espresso, brown sugar, oat milk.', sizes: sizeSet(5.75, 6.25, 6.75) },

  // Lotus Energy
  { id: 'paradiselotus', category: 'lotus', name: 'Paradise Lotus', desc: 'Raspberry, orange, pineapple, pink lotus, soda water.', sizes: sizeSet(5.00, 5.50, 6.00) },
  { id: 'tidalwave', category: 'lotus', name: 'Tidal Wave', desc: 'Blue lotus, blue raspberry, lavender, lemon cold foam.', sizes: sizeSet(6.00, 6.50, 7.00) },
  { id: 'cherrybomb', category: 'lotus', name: 'Cherry Bomb', desc: 'Red lotus, cherry, lime, soda water.', sizes: sizeSet(5.00, 5.50, 6.00) },

  // Sweets
  { id: 'milkshake', category: 'sweets', name: 'Milkshake', desc: 'Vanilla, strawberry, chocolate, or espresso.', price: 6.00, tags: ['veg'] },
  { id: 'icecream', category: 'sweets', name: 'Ice Cream Cup', desc: 'Scoop of the day.', sizes: [{ label: '1 scoop', price: 2.25 }, { label: '2 scoop', price: 3.25 }], tags: ['veg'] },

  // Kids
  { id: 'grilledcheese', category: 'kids', name: 'Grilled Cheese', desc: 'Served with fountain drink & choice of chips, cookie, or fruit.', price: 7.00, tags: ['kids'] },
  { id: 'pizzabagel', category: 'kids', name: 'Pizza Bagel', desc: 'Plain bagel, pizza sauce, mozzarella, pepperoni. Served with drink & side.', price: 7.00, tags: ['kids'] },
];

export const TOP_SELLERS: string[] = ['lavenderfog', 'avotoast', 'club', 'blackberrycb'];
