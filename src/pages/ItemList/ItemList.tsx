import "./item-list.scss";
import { Ingredient, foodType, weightType } from "../../interfaces/Ingredient";
import IngredientCard from "../../molecules/IngredientCard/IngredientCard";
import Button from "@mui/material/Button";

function ItemList() {
  const itemList: Ingredient[] = [
    {
      name: "Coke",
      quantity: 10,
      quantityType: weightType.Pieces,
      foodType: foodType.Beverages,
    },
    {
      name: "Pasta",
      quantity: 200,
      quantityType: weightType.Grams,
      foodType: foodType.Carbohydrates,
    },
    {
      name: "Meat",
      quantity: 1.2,
      quantityType: weightType.Kilograms,
      foodType: foodType.Proteins,
    },
    {
      name: "Milk",
      quantity: 3,
      quantityType: weightType.Liters,
      foodType: foodType.Dairys,
    },
    {
      name: "Strawberry Jam",
      quantity: 500,
      quantityType: weightType.Grams,
      foodType: foodType.Sweets,
    },
    {
      name: "Bananas",
      quantity: 7,
      quantityType: weightType.Pieces,
      foodType: foodType.Fruits,
    },
    {
      name: "Carrots",
      quantity: 10,
      quantityType: weightType.Pieces,
      foodType: foodType.Vegetables,
    },
    {
      name: "Olive Oil",
      quantity: 600,
      quantityType: weightType.MiliLiters,
      foodType: foodType.Oils,
    },
    {
      name: "Salt",
      quantity: 500,
      quantityType: weightType.Grams,
      foodType: foodType.Spices,
    },
  ];

  return (
    <div className="item-list">
      <div className="item-list-actions">
        <Button variant="contained">Add Ingredient</Button>
      </div>
      <div className="item-list-view">
        {itemList &&
          itemList.map((item) => {
            return (
              <div className="item-list-view-item">
                <IngredientCard {...item}></IngredientCard>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ItemList;
