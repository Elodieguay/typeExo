import type { Recipe } from "../types/dummyTypes";

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <li className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-img" />
      <h3>{recipe.name}</h3>
      <p>{recipe.rating} / 5</p>
      <p>
        <strong>Temps :</strong> {recipe.prepTimeMinutes} +{" "}
        {recipe.cookTimeMinutes} min
      </p>

      <p>
        <strong>Cuisine :</strong> {recipe.cuisine}
      </p>
    </li>
  );
};

export default RecipeCard;
