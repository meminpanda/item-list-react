export interface Ingredient {
  name: string;
  quantity: number;
  quantityType: weightType;
  foodType: foodType;
  image?: string;
  expDate?: Date;
  energyValue?: number;
  servingSizeValue?: number;
  servingSizeType?: weightType;
  nutritionalValue?: nutritionValue;
  storageType?: storageType;
}

export enum weightType {
  Kilograms = "kg",
  Grams = "gm",
  Liters = "L",
  MiliLiters = "ml",
  Pieces = "p",
  Ounce = "oz",
}

export enum foodType {
  Carbohydrates = "carbs",
  Proteins = "protein",
  Dairys = "dairy",
  Sweets = "sweets",
  Fruits = "fruit",
  Vegetables = "vegetable",
  Beverages = "beverage",
  Oils = "oil",
  Spices = "spice",
}

export enum storageType {
  Fridge = "fridge",
  Cupboard = "cupboard",
  Spicerack = "spicerack",
  Freezer = "freezer",
  Countertop = "countertop",
  Storage = "storage",
}

export interface nutritionValue {
  totalFat: number;
  cholesterol: number;
  sodium: number;
  carbohydrate: number;
  protein: number;
}
