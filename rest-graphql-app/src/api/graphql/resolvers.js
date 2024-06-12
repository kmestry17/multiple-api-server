const now = require("performance-now");
let recipes = [];

// Helper function to calculate response time
function calculateResponseTime(startTime) {
  const endTime = now();
  return endTime - startTime;
}

const resolvers = {
  Query: {
    recipes: () => {
      // Get the start time
      const startTime = now();

      const result = recipes;

      // Calculate response time
      const responseTime = calculateResponseTime(startTime);
      console.log(
        `GraphQL Query - recipes - Response time: ${responseTime.toFixed(2)} ms`
      );
      return result;
    },

    recipe: (_, { id }) => recipes.find((recipe) => recipe.id === id),
  },
  Mutation: {
    addRecipe: (_, { name, ingredients, instructions }) => {
      // Input validation
      if (!name || !ingredients || !instructions) {
        throw new Error("Name, ingredients, and instructions are required.");
      }

      const recipe = {
        id: String(recipes.length + 1),
        name,
        ingredients,
        instructions,
      };
      recipes.push(recipe);
      return recipe;
    },

    updateRecipe: (_, { id, name, ingredients, instructions }) => {
      const recipeIndex = recipes.findIndex((recipe) => recipe.id === id);
      if (recipeIndex === -1) {
        throw new Error("Recipe not found.");
      }

      // Input validation
      if (!name || !ingredients || !instructions) {
        throw new Error("Name, ingredients, and instructions are required.");
      }

      const updatedRecipe = {
        id,
        name,
        ingredients,
        instructions,
      };
      recipes[recipeIndex] = updatedRecipe;
      return updatedRecipe;
    },

    deleteRecipe: (_, { id }) => {
      const recipeIndex = recipes.findIndex((recipe) => recipe.id === id);
      if (recipeIndex === -1) {
        throw new Error("Recipe not found.");
      }

      const deletedRecipe = recipes[recipeIndex];
      recipes = recipes.filter((recipe) => recipe.id !== id);
      return deletedRecipe;
    },
  },
};

module.exports = resolvers;
