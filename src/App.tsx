import RecipeCard from "./component/recipeCard";
import { useListDummy } from "./hook/useListDummy";
import { type Product, type Recipe } from "./types/dummyTypes";
import "./index.css";
import { result } from "./tables";

const App = () => {
  const { items: recipes, loading: loadingRecipes } = useListDummy<Recipe>(
    "recipes",
    {
      limit: 12,
      skip: 0,
    }
  );

  const { items: products, loading: loadingProducts } = useListDummy<Product>(
    "products",
    {
      limit: 12,
      skip: 0,
    }
  );

  if (loadingRecipes || loadingProducts) return <p>Chargement...</p>;

  console.log(result);
  
  return (
    <div className="list-container">
      <div className="list-flex">
        <ul>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </ul>
      </div>
      <div className="list-flex">
        <ul>
          {products.map((product) => (
            <li key={product.id} className="recipe-card">
              <img
                src={product.images[0]}
                alt={product.title}
                className="recipe-img"
              />
              <h3>{product.title}</h3>
              <p>{product.rating} / 5</p>
              <p>
                <strong>Price :</strong> ${product.price}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

};
export default App;
