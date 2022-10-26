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
    weight: Number
    stats: ItemStats
  }

  type ItemCost {
    _id: ID
    quantity: Number
    unit: String
  }

  type ItemStats {
    _id: ID
  
  }

  type Skill {
    _id: ID
    skill: String
    proficient: Boolean
  }

  type Stats {
    _id: ID
    strength: String
    dexterity: String
    constitution: String
    intelligence: String
    wisdom: ItemCost
    charisma: Number
    hit_points: ItemStats
    death_saves: Number
    skills: [Skill]
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
    me: User
    user(username: String!): User
    users: [User]
    character(characterId: ID!): Character
    characters(username: String): [Character]
    allcharacters: [Character]
    inventory(characterId: ID!): [InventoryItem]
    traits(characterId: ID!): Traits
    stats(characterId: ID!): Stats
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    createCharacter(userId: ID!, traits: Traits!, stats: Stats!, inventory: Inventory!): Character
    createInventory(characterId: ID!, items: [InventoryItem]): Character
    createItem(group: String!, kind: String!, iteminfo: ItemInfo!): InventoryItem
    addItemInfo(item: ID!, name: String!, url: String!, desc: String, special: String, cost: ItemCost!, weight: Number!, stats: ItemStats): InventoryItem
    addItemCost(item: ID!, quantity: Number!, unit: String!): ItemInfo
    addItemToInv(characterId: ID!, item: InventoryItem!): Inventory
    updateCharacter(_id: ID!, traits: Traits, stats: Stats, inventory: Inventory): Character
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
