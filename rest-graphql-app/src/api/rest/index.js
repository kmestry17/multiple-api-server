const recipeRoutes = require("./recipeRoutes");

module.exports = (app) => {
  app.use("/api", recipeRoutes);
};
