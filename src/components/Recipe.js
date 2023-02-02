import React from "react";
import IngredientList from "./IngredientList";

export default function Recipe(props) {
  const { 
    id,
    name, 
    cookTime, 
    servings, 
    instructions,
    ingredients,
    handleRecipeDelete
} = props;

  return (
    <div className="recipe">
      <div className="dflex">
        <h3>{name}</h3>
        <button className="btn editBtn">Edit</button>
        <button className="btn deleteBtn" onClick={() => handleRecipeDelete(id)}>Delete</button>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>
      <div>
        <span>Instructions:</span>
        <div>
            <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}
