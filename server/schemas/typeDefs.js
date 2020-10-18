const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type MenuItem {
      _id: ID
      item: String
      description: String
      price: String
      username: String
    }

    
    type Restaurant {
      _id: ID
      restaurantName: String
      description: String
      url: String
      username: String
      menuItems: [MenuItem]
    }


    type User {
      _id: ID
      username: String
      email: String
      restaurants: [Restaurant]
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        restaurants(username: String!): [Restaurant]
        restaurant(_id: ID!): Restaurant
    }

    type Auth {
        token: ID
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addRestaurant(restaurantName: String!, description: String!, url: String!): Restaurant
        addMenu(restaurantId: ID!, item: String!, description: String!, price: String!): Restaurant
        editRestaurant(restaurantId: ID!, description: String!): Restaurant
        editMenu(restaurantId: ID!, item: String!, description: String!, price: String!): MenuItem
        deleteRestaurant(restaurantName: String!, description: String!, url: String!): Restaurant
        deleteMenu(restaurantId: ID!, item: String!, description: String!, price: String!): MenuItem
      }

`;

module.exports = typeDefs;