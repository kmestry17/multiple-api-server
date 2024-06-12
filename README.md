
# (REST API🚀 vs GraphQL🕸️) Recipe Storage and Retrieval API 🍲 - Multiple API Server

Welcome to the Recipe Storage and Retrieval API! This project provides both REST and GraphQL APIs for storing and retrieving recipes.

## ✨ Features

- 🗃️ Store and retrieve recipes
- 🔍 Query recipes using REST API
- 📈 Query and mutate recipes using GraphQL
- ⏱️ Measure performance of REST vs GraphQL

## Screenshots 📸

## 🚀 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/rest-graphql-app.git
    cd rest-graphql-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## 🛠️ Usage

1. Start the server:
    ```bash
    npm start
    ```

2. The server will be running at `http://localhost:3000`

3. REST API Endpoints:
    - GET `/api/recipes`
    - POST `/api/recipes`
    - GET `/api/recipes/:id`
    - PUT `/api/recipes/:id`
    - DELETE `/api/recipes/:id`

4. GraphQL Endpoint:
    - Available at `http://localhost:3000/graphql`
    - Use GraphQL Playground or any GraphQL client to query and mutate recipes.

## 🛠️ Tools and Libraries

- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **Apollo Server**: GraphQL server for Node.js
- **GraphQL**: Query language for APIs
- **Express-GraphQL**: Middleware for integrating GraphQL with Express
- **Body-Parser**: Node.js body parsing middleware
- **Morgan**: HTTP request logger middleware for Node.js
- **Performance-Now**: High-resolution timer for measuring performance

## 🧪 Testing

You can test the API endpoints using tools like Postman, Insomnia, or curl for REST endpoints, and GraphQL Playground for GraphQL endpoints.

### REST API Testing

- **GET /api/recipes**
    ```bash
    curl -X GET http://localhost:3000/api/recipes
    ```

- **POST /api/recipes**
    ```bash
    curl -X POST http://localhost:3000/api/recipes \
    -H "Content-Type: application/json" \
    -d '{"name": "Spaghetti", "ingredients": ["pasta", "tomato sauce"], "instructions": "Boil pasta. Add sauce."}'
    ```

- **GET /api/recipes/:id**
    ```bash
    curl -X GET http://localhost:3000/api/recipes/your-recipe-id
    ```

### GraphQL API Testing

Access the GraphQL Playground at `http://localhost:3000/graphql` and use the following queries and mutations:

- **Query: Fetch All Recipes**
    ```graphql
    {
      recipes {
        id
        name
        ingredients
        instructions
      }
    }
    ```

- **Mutation: Add a Recipe**
    ```graphql
    mutation {
      addRecipe(name: "Spaghetti", ingredients: ["pasta", "tomato sauce"], instructions: "Boil pasta. Add sauce.") {
        id
        name
        ingredients
        instructions
      }
    }
    ```

## ⏱️ Performance Measurement

Response times for each API request are logged in the console. Compare the response times to assess the performance of REST vs GraphQL.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## 📄 License

This project is licensed under the MIT License.
