import { buildSchema } from 'graphql';

module.exports = buildSchema(`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    admin_user: Boolean
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type Query {
    getUsers: [User!]!
  }

  typeMutation {
    createUser(userInput: UserInput)
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
