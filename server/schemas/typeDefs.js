const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type InventoryItem {
    _id: ID
    group: String
    category: String
    iteminfo: ItemInfo
  }

  input InventoryItemInput {
    group: String
    category: String
    iteminfo: ItemInfoInput
  }

  type ItemInfo {
    name: String
    url: String
    desc: String
    special: String
    cost: Cost
    weight: Int
  }

  input ItemInfoInput {
    name: String
    url: String
    desc: String
    special: String
    cost: CostInput
    weight: Int
  }

  type Cost {
    quantity: Int
    unit: String
  }

  input CostInput {
    quantity: Int
    unit: String
  }

  type Skill {
    _id: ID
    skill: String
    proficient: Boolean
  }

  input SkillInput {
    skill: String
    proficient: Boolean
  }

  type Language {
    _id: ID
    language: String
  }

  input LanguageInput {
    language: String
  }

  type Proficiency {
    _id: ID
    proficiency: String
  }
  
  input ProficiencyInput {
    proficiency: String
  }

  type Feat {
    _id: ID
    feat: String
  }

  input FeatInput {
    feat: String
  }

  type Traits {
    name: String
    level: Int!
    description: String
    race: String
    characterclass: String
    background: String
    languages: [Language]
    proficiencies: [Proficiency]
    feats: [Feat]
  }

  input TraitsInput {
    name: String
    level: Int!
    description: String
    race: String
    characterclass: String
    background: String
    languages: [LanguageInput]
    proficiencies: [ProficiencyInput]
    feats: [FeatInput]
  }

  type Stats {
    strength: Int!
    dexterity: Int!
    constitution: Int!
    intelligence: Int!
    wisdom: Int!
    charisma: Int!
    hit_points: Int!
    death_saves: Int!
    skills: [Skill]
  }

  input StatsInput {
    strength: Int!
    dexterity: Int!
    constitution: Int!
    intelligence: Int!
    wisdom: Int!
    charisma: Int!
    hit_points: Int!
    death_saves: Int!
    skills: [SkillInput]
  }

  type Inventory {
    items: [InventoryItem]
  }

  input InventoryInput {
    items: [InventoryItemInput]
  }

  type Character {
    _id: ID
    image: String
    traits: Traits
    stats: Stats
    inventory: Inventory
  }

  input CharacterInput {
    _id: ID
    image: String
    traits: TraitsInput
    stats: StatsInput
    inventory: InventoryInput
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
    users: [User]
    user(userId: ID!): User
    characters(userId: ID!): [Character]
    character(characterId: ID!): Character
  }


  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    createCharacter(character: CharacterInput!): Character
    updateCharacter(character: CharacterInput!, characterId: ID!, userId: ID!): User
    deleteCharacter(characterId: ID!): User
  }
`;




module.exports = typeDefs;
