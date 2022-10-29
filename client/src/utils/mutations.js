import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql `
  mutation updateUser {
  _id
  firstName
  lastName
  email
  characters {
    _id
    image
    traits {
      name
      level
      description
      race
      characterclass
      background
      languages {
        _id
        language
      }
      proficiencies {
        _id
        proficiency
      }
      feats {
        _id
        feat
      }
    }
    stats {
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
      hit_points
      death_saves
      skills {
        _id
        skill
        proficient
      }
    }
    inventory {
      items {
        _id
        group
        category
        iteminfo {
          name
          url
          desc
          special
          cost {
            quantity
            unit
          }
          weight
        }
      }
    }
  }
}`

export const CREATE_CHARACTER = gql `
mutation createCharacter($character: CharacterInput!) {
  createCharacter(character: $character) {
    image
    traits {
      name
      level
      description
      race
      characterclass
      background
      languages {
        _id
        language
      }
      proficiencies {
        _id
        proficiency
      }
      feats {
        _id
        feat
      }
    }
    stats {
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
      hit_points
      death_saves
      skills {
        _id
        skill
      }
    }
    inventory {
      items {
        _id
        group
        kind
        iteminfo {
          name
          url
          desc
          special
          cost {
            quantity
            unit
          }
          weight
        }
      }
    }
  }
}`

export const DELETE_CHARACTER = gql `
  mutation deleteCharacter(characterId: $characterId) {
  _id
  firstName
  lastName
  email
  characters {
    _id
    image
    traits {
      name
      level
      description
      race
      characterclass
      background
      languages {
        _id
        language
      }
      proficiencies {
        _id
        proficiency
      }
      feats {
        _id
        feat
      }
    }
    stats {
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
      hit_points
      death_saves
      skills {
        _id
        skill
        proficient
      }
    }
    inventory {
      items {
        _id
        group
        category
        iteminfo {
          name
          url
          desc
          special
          cost {
            quantity
            unit
          }
          weight
        }
      }
    }
  }
}`
