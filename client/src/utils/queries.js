import { gql } from '@apollo/client';

// Query to get all basic class data
export const QUERY_CLASS= gql`
  {
    classes {
      name
      hit_die
      profficiencies {
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
      desc
    }
  }
`;

