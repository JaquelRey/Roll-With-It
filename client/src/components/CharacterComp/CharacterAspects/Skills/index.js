import React from "react";
const CharSkills = () => {
    const skillList = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"]
    return (
        <div className="container">
            <div>
                <div>
                    <div>
                        Skills
                    </div>
                    <div>
                        Prof.
                    </div>
                    <div>
                        Bonus
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