import { buildSchema } from 'graphql';

module.exports = buildSchema(`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    admin_user: Boolean
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
