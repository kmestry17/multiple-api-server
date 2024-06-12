// Initialize express router to perform CRUD operations

const express = require("express");
const router = express.Router();
const now = require("performance-now");

// In-memory storage for recipes
let recipes = [];

// Helper function to calculate response time
function calculateResponseTime(startTime) {
  const endTime = now();
  return endTime - startTime;
}

// GET /recipes
router.get("/recipes", (req, res) => {
  // Get the start time
  const startTime = now();
  res.send(recipes);

  // Calculate response time
  const responseTime = calculateResponseTime(startTime);
  console.log(
    `GET /api/recipes - Response time: ${responseTime.toFixed(2)} ms`
  );
});

// Find a recipe by id
router.get("/recipes/:id", (req, res) => {
  const recipe = recipes.find(
    (recipe) => recipe.id === parseInt(req.params.id)
  );
  if (!recipe) return res.status(404).send("Recipe not found");
  res.send(recipe);
});

// Save a recipe
router.post("/recipes", (req, res) => {
  const newRecipe = {
    id: req.body.id,
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  };
  recipes.push(newRecipe);
  res.send(newRecipe);
});

// Update a recipe
router.put("/recipes/:id", (req, res) => {
  const recipeId = req.params.id;
  const recipe = recipes.find((recipe) => recipe.id === recipeId);

  console.log("Recipe: ", recipe);

  if (!recipe) {
    console.log("Recipe not found");
    return res.status(404).send("Recipe not found");
  }

  if (!req.body.name) {
    console.log("Invalid request: 'name' field is required");
    return res.status(400).send("Invalid request: 'name' field is required");
  }

  recipe.name = req.body.name;
  res.send(recipe);
});

// Delete a recipe
router.delete("/recipes/:id", (req, res) => {
  const recipe = recipes.find((recipe) => recipe.id === req.params.id);
  if (!recipe) return res.status(404).send("Recipe not found");

  const index = recipes.indexOf(recipe);
  recipes.splice(index, 1);
  res.send(recipe);
});

module.exports = router;
