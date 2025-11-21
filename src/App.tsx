import RecipeCard from "./component/recipeCard";
import { useListDummy } from "./hook/useRecipes";
import { type Recipe } from "./types/dummyTypes";

const App = () => {
  const { items, loading } = useListDummy<Recipe>("recipes", {
    limit: 12,
    skip: 0,
  });

  if (loading) return <p>Chargement...</p>;

  return (
    <ul className="recipes-grid">
      {items.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};
export default App;
