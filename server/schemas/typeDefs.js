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
    proficiencies: [Proficiency]
    feats: [Feat]
  }

  type Stats {
    _id: ID
    strength: Float!
    dexterity: Float!
    constitution: Float!
    intelligence: Float!
    wisdom: Float!
    charisma: Float!
    hit_points: Float!
    death_saves: Float!
    skills: [Skill]
  }

  type Skill {
    _id: ID
    skill: String
    proficient: Boolean
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
    userCharacters(username: String): [Character]
    inventory(characterId: ID!): [InventoryItem]
    traits(characterId: ID!): Traits
    languages(traitsId: ID!): [Language]
    proficiencies(traitsId: ID!): [Proficiency]
    feats(traitsId: ID!): [Feat]
    stats(characterId: ID!): Stats
    skills(statsId: ID!): [Skill]
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    createCharacter(userId: ID!, traits: ID!, stats: ID!, inventory: ID!): Character
    createTraits(characterId: ID!, name: String, description: String, race: String, class: String, background: String, languages: [ID!], proficiencies: [ID!], feats: [ID!]): Character
    addLanguage(traitsId: ID!, language: String): Traits
    addProficiency(traitsId: ID!, proficiency: String): Traits
    addFeat(traitsId: ID!, feat: String): Traits
    createStats(characterId: ID!, strength: Float!, dexterity: Float!, constitution: Float!, intelligence: Float!, wisdom: Float!, charisma: Float!, hit_points: Float!, death_saves: Float!, skills: ID!): Character
    addSkill(statsId: ID!, skill: String, proficient: Boolean) : Stats
    createInventory(characterId: ID!, items: [ID!]): Character
    createItem(group: String!, kind: String!, iteminfo: ID!): ID!
    addItemInfo(item: ID!, name: String!, url: String!, desc: String, special: String, cost: ID!, weight: Float!): InventoryItem
    addItemCost(item: ID!, quantity: Float!, unit: String!): ItemInfo
    addItemToInv(characterId: ID!, item: ID!): Inventory
    updateCharacter(_id: ID!, traits: ID!, stats: ID!, inventory: ID!): Character
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
