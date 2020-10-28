import { buildSchema } from 'graphql';

module.exports = buildSchema(`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    admin_user: Boolean
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
    colors: [Colors] 
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

  type Query {
    getUsers: [User!]!
    login(email: String!, password: String!): AuthPayload
  }

  type Mutation {
    signup(userInput: UserInput): AuthPayload
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
