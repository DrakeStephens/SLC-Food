const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Resturaunt {
      _id: ID
      resturauntName : String
      description: String
      url: String
      username: String
    }


    type User {
      _id: ID
      username: String
      email: String
      resturaunts: [Resturaunt]
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        resturaunts(username: String): [Resturaunt]
        resturaunt(_id: ID!): Resturaunt
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addResturaunt(resturauntName: String!, description: String!, url: String!): Resturaunt
      }

`;

module.exports = typeDefs;