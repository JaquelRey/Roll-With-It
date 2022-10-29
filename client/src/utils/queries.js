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
    feats {
      name
    }
  }
`;
