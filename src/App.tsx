import RecipeCard from "./component/recipeCard";
import { useRecipes } from "./hook/useRecipes";

const App = () => {
  const { recipes, loading } = useRecipes();

  if (loading) return <p>Chargement...</p>;

  return (
    <ul className="recipes-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};
export default App;
