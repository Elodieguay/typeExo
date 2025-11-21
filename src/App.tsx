import { recipesDummy, type Recipe } from "./api";
import { useEffect, useState } from "react";
import RecipeCard from "./recipeCard";


const App = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRecipes() {
      try {
        const data = await recipesDummy({ limit: 10, skip: 0 });
        setRecipes(data.recipes);
      } finally {
        setLoading(false);
      }
    }

    loadRecipes();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul className="recipes-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};
export default App
