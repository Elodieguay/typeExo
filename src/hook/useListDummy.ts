import { useEffect, useState } from "react";
import {
  listDummy,
  type ApiParams,
} from "../api/api";

// export const useRecipes = () => {
//   const [recipes, setRecipes] = useState<Recipe[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadRecipes() {
//       try {
//         const data = await recipesDummy({ limit: 10, skip: 0 });
//         setRecipes(data.recipes);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadRecipes();
//   }, []);

//   return { recipes, loading };
// };

export const useListDummy = <T>(endpoint: string, params: ApiParams) => {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadRecipes() {
      try {
        const data = await listDummy<T>(endpoint, params);
        setItems(data.items);
      } finally {
        setLoading(false);
      }
    }

    loadRecipes();
  }, [endpoint, params.limit, params.skip]);

  return { items, loading };
};
