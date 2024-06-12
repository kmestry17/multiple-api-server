const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

console.log("typeDefs:", typeDefs);
console.log("resolvers:", resolvers);

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
