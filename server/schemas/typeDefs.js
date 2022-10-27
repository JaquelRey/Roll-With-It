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
    iteminfo: ItemInfo
  }

  type ItemInfo {
    _id: ID
    name: String
    url: String
    desc: String
    special: String
    cost: ItemCost
    weight: Float
  }

  type ItemCost {
    _id: ID
    quantity: Float
    unit: String
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

  type Stats {
    _id: ID
    strength: Float!
    dexterity: Float!
    constitution: Float!
    intelligence: Float!
    wisdome: Float!
    charisma: Float!
    hit_points: Float!
    death_saves: Float!
    skills: Float!
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

  input CharacterInput {
    character: Character
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    createCharacter(character: CharacterInput!): Character
    updateCharacter(character: CharacterInput!): Character
  }
`;




module.exports = typeDefs;
