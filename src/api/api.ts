
// export type RecipesResponse = {
//   recipes: Recipe[];
//   total: number;
//   skip: number;
//   limit: number;
// };
// // export type recipesParams = Partial<Pick<RecipesResponse, "limit" | "skip">>;

export type ApiParams = {
  limit?: number;
  skip?: number;
};
export type genericType<T> = {
  items: T[];
  total: number;
  skip: number;
  limit: number;
};

export async function listDummy<T>(
  endpoint: string,
  params: ApiParams
): Promise<genericType<T>> {
  const { limit = 30, skip = 0 } = params;

  const response = await fetch(
    `https://dummyjson.com/${endpoint}?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data = await response.json();

  return {
    items: data[endpoint],
    total: data.total,
    skip: data.skip,
    limit: data.limit,
  };
}
