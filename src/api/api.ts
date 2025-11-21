export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

// export type RecipesResponse = {
//   recipes: Recipe[];
//   total: number;
//   skip: number;
//   limit: number;
// };
// // export type recipesParams = Partial<Pick<RecipesResponse, "limit" | "skip">>;

type ApiParams = {
  limit?: number;
  skip?: number;
};
export type genericType<T> = {
  recipes: T[];
  total: number;
  skip: number;
  limit: number;
};

export type RecipesResponse = genericType<Recipe>;

export async function recipesDummy(
  params: ApiParams
): Promise<RecipesResponse> {
  const { limit = 30, skip = 0 } = params;

  const response = await fetch(
    `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data: RecipesResponse = await response.json();
  return data;
}
