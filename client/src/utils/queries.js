import { gql } from '@apollo/client';

// Query to get all basic class data
export const QUERY_CLASS= gql`
  {
    classes {
      name
      hit_die
      proficiencies {
        name        
        }
        saving_throws {
          name
        }
        spellcasting{
          info {
            name
          }
          level
        }
        starting_equipment {
          equipment{
            name
          }
          quantity
        }
        proficiency_choices {
          desc
        }
    }
  }
`;

  // Query to get race data
  export const QUERY_RACE = gql`
  {
    races {
      name
      ability_bonuses {
        ability_score {
          name
        }
        bonus
      }
      language_desc
      size
      speed
      starting_proficiencies {
        name
      }
      traits {
        name
        desc
      }
    }
  }
`;

  // Query to get all alignments
  export const QUERY_ALIGNMENT = gql`
  {
    alignments {
      name
    }
  }
`;
// Query to get the options needed to start character build
//  ARGS
// {
//   "order": {
//     "by": "NAME"
//   },
//   "languagesOrder2": {
//     "by": "NAME"
//   }
// }
export const QUERY_START = gql`
  query ($languagesOrder2: LanguageOrder) {
    races {
      name
    }
    classes {
      name
    }
    backgrounds {
      name
    }
    languages(order: $languagesOrder2) {
      name
    }
  }
`;

// Query to get the options for skill
//------
//  ARGS
// {
//   "order": {
//     "by": "NAME"
//   }
// }
//-----
// RETURNS:
// Skill name
// description
// ability type name (wisdom, strength, ect)
export const QUERY_SKILLS = gql`
  query ($order: SkillOrder) {
    skills(order: $order) {
      name
      desc
      ability_score {
        full_name
      }
    }
  }
`;


// Query to get the options for proficiency
//------
export const ARGS_PROFICIENCIES = 
{
  "type": [
    "WEAPONS",
    "ARTISANS_TOOLS",
    "ARMOR",
    "MUSICAL_INSTRUMENTS",
    "OTHER",
    "GAMING_SETS",
    "VEHICLES"
  ],
  "order": {
    "by": "TYPE"
  }
}
//-----
// RETURNS:
// Proficiency name
export const QUERY_PROFICIENCIES = gql`
  query Proficiencies($type: ProficiencyTypeFilter, $order: ProficiencyOrder) {
    proficiencies(type: $type, order: $order) {
      name
    }
  }
`;

// Query to get the options for features
//------
export const ARGS_FEATURES = 
{
  "order": {
    "by": "NAME"
  },
 "level": 1
}
//-----
// RETURNS:
// Feature name
export const QUERY_FEATURES = gql`
  query Features($order: FeatureOrder, $level: IntFilter) {
    features(order: $order, level: $level) {
      name
    }
  }
`;

// Query to get equipment
//------
export const ARGS_EQUIPMENTS = 
{
  "equipmentCategory": {
    "name": "Adventuring Gear"
    },
  "order": {
    "by": "NAME"
  }
}
//-------------------------
// Adventuring Gear, Ammunition, Weapon, Armor, Tools, Mounts and Vehicles,
// Kits, Shields, Gaming Sets, Equipment Packs, Other Tools, Artisan's Tools
//------------------------
// RETURNS:
// Proficiency name
export const QUERY_EQUIPMENTS = gql`
query Equipments($name: String, $equipmentCategory: StringFilter, $order: EquipmentOrder) {
  equipments(name: $name, equipment_category: $equipmentCategory, order: $order) {
    name
    cost {
      quantity
      unit
    }
    desc
    equipment_category {
      name
    }
    weight
  }
}
`;

export const QUERY_ME = gql`
query Query {
  me {
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
  }
}
`;

export const QUERY_USER = gql`
query Query($userId: ID!) {
  user(userId: $userId) {
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
  }
}
`;

export const QUERY_USERS = gql`
query Query {
  users {
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
  }
}
`;

export const QUERY_CHARACTERS = gql`
query Query($userId: ID!) {
  characters(userId: $userId) {
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
}
`;


export const QUERY_CHARACTER = gql`
query Query($characterId: ID!) {
  character(characterId: $characterId) {
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
}
`;



