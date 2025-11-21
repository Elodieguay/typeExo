import { useEffect, useState } from "react";
import { recipesDummy, type Recipe } from "../api/api";

export const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRecipes() {
      try {
        const data = await recipesDummy({ limit: 10, skip: 0 });
        setRecipes(data.items);
      } finally {
        setLoading(false);
      }
    }

    loadRecipes();
  }, []);

  return { recipes, loading };
};
