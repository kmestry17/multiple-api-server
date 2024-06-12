const express = require("express");
const bodyParser = require("body-parser");
const restRoutes = require("./api/rest");

const morgan = require("morgan");
const graphqlServer = require("./api/graphql");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(morgan("dev"));

// Initialize REST routes
restRoutes(app);

// Initialize GraphQL routes
graphqlServer.start().then(() => {
  graphqlServer.applyMiddleware({ app, path: "/graphql" });

  // Start the server
  app.listen(port, () => {
    console.log(`REST Server running on port ${port}`);
    console.log(`GraphQL endpoint at http://localhost:${port}/graphql`);
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
