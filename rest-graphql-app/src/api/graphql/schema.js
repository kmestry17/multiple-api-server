const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Recipe {
    id: ID!
    name: String!
    ingredients: [String!]!
    instructions: [String!]!
  }

  type Query {
    recipes: [Recipe]
    recipe(id: ID!): Recipe
  }

  type Mutation {
    addRecipe(
      name: String!
      ingredients: [String!]!
      instructions: [String!]!
    ): Recipe

    updateRecipe(
      id: ID!
      name: String!
      ingredients: [String!]!
      instructions: [String!]!
    ): Recipe

    deleteRecipe(id: ID!): Recipe
  }
`;

module.exports = typeDefs;
