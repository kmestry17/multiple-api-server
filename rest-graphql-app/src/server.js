const express = require("express");
const bodyParser = require("body-parser");
const restRoutes = require("./api/rest");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Initialize REST routes
restRoutes(app);

// Start the server
app.listen(port, () => {
  console.log(`REST Server running on port ${port}`);
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
