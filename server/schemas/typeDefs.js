const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Inventory {
    _id: ID
    items: [InventoryItem]
  }

  type InventoryItem {
    _id: ID
    group: String
    kind: String
    iteminfo: [ItemInfo]
  }
  
  type Traits {
    _id: ID
    name: String
    description: String
    race: String
    class: String
    background: String
    languages: [Language]
    proficiences: [Proficiency]
    feats: [Feat]
  }

  type Language {
    _id: ID
    language: String
  }

  type Proficiency {
    _id: ID
    proficiency: String
  }

  type Feat {
    _id: ID
    feat: String
  }

  type Character {
    _id: ID
    traits: Traits
    stats: Stats
    inventory: Inventory
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    characters: [Character]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
