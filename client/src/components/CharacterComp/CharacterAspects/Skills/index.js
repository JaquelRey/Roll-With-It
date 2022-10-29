import React from "react";
import './skills.css';

const CharSkills = () => {
    const skillList = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"]
    return (
        <div id='skills'>
            <div>
                <div>
                    <div>
                        <h3>Skills</h3>
                    </div>
                    <div>
                        <h4>Proficiency</h4>
                        <input class="input" type="text" placeholder="Proficiency"></input>
                    </div>
                    <div>
                        <h4>Bonus</h4>
                        <input class="input" type="text" placeholder="Bonus"></input>
                    </div>
                </div>
                {skillList.forEach(element => {
                    <div key={element}>
                        <div>{element}</div>
                        <div>bubble</div>
                        <div>box</div>
                    </div>
                })}
            </div>

        </div>
    );
};

export default CharSkills;