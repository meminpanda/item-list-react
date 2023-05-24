import "./item-list.scss";
import { Ingredient } from "../../interfaces/Ingredient";

function ItemList() {
  return (
    <div className="item-list">
      <div className="item-list-actions">
        <button>Add Ingredient</button>
      </div>
      <div className="item-list-view">
        <div className="">

        </div>
      </div>
    </div>
  );
}

export default ItemList;
