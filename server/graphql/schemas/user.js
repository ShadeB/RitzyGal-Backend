import { buildSchema } from 'graphql';

module.exports = buildSchema(`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    role: String!
  }

  type Product {
    _id: ID!
    name: String!
    description: String!
    category: [String!]
    price: Float!
    sizes: String!
    image: String!
    brand: String!
    instock: Boolean!
    rating: Float! 
  }

  type Colors {
    name: String
    Hex: String
  }

  type AuthPayload {
    userId: String!
    token: String!
    tokenDuration: String!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input ProductInput {
    name: String!
    description: String!
    category: [String!]
    price: Float!
    sizes: String!
    image: String!
    brand: String!
    instock: Boolean!
    rating: Float!
    colors: [ColorsInput]
  }

  input ColorsInput {
    name: String
    Hex: String
  }

  type Query {
    getUsers: [User!]!
    login(email: String!, password: String!): AuthPayload
  }

  type Mutation {
    signup(userInput: UserInput): AuthPayload
    addProduct(productInput: ProductInput): Product
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
