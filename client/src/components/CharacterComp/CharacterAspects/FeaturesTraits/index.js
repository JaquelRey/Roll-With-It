import React from "react";

const CharTraits = () => {
    const traitsList = ['Abrasive', 'Absent-minded', 'Brawler', 'Cautious', 'Detached', 'Dishonest', 'Distinctive', 'Easygoing', 'Farsighted', 'Focused', 'Hard of Hearing', 'Hardy', 'Illiterate', 'Inattentive', 'Musclebound', 'Nearsighted', 'Passionate', 'Plucky', 'Polite', 'Quick', 'Reckless', 'Relentless', 'Saddleborn', 'Skinny', 'Slippery', 'Slow', 'Specialized', 'Spellgifted', 'Stout', 'Suspicious', 'Torpid', 'Uncivilized', 'Roll Again Twice'];
    return (
        <div className="container">
            <div>
                <h4>Traits and Feats</h4>

                <h5>Trait One</h5>
                <div class='select'>
                    <select>
                        <option>Traits</option>
                        <option>{traitsList[0]}</option>
                        <option>{traitsList[1]}</option>
                        <option>{traitsList[2]}</option>
                        <option>{traitsList[3]}</option>
                        <option>{traitsList[4]}</option>
                        <option>{traitsList[5]}</option>
                        <option>{traitsList[6]}</option>
                        <option>{traitsList[7]}</option>
                        <option>{traitsList[8]}</option>
                        <option>{traitsList[9]}</option>
                        <option>{traitsList[10]}</option>
                        <option>{traitsList[11]}</option>
                        <option>{traitsList[12]}</option>
                        <option>{traitsList[13]}</option>
                        <option>{traitsList[14]}</option>
                        <option>{traitsList[15]}</option>
                        <option>{traitsList[16]}</option>
                        <option>{traitsList[17]}</option>
                        <option>{traitsList[18]}</option>
                        <option>{traitsList[19]}</option>
                        <option>{traitsList[20]}</option>
                        <option>{traitsList[21]}</option>
                        <option>{traitsList[22]}</option>
                        <option>{traitsList[23]}</option>
                        <option>{traitsList[24]}</option>
                        <option>{traitsList[25]}</option>
                        <option>{traitsList[26]}</option>
                        <option>{traitsList[27]}</option>
                        <option>{traitsList[28]}</option>
                        <option>{traitsList[29]}</option>
                        <option>{traitsList[30]}</option>
                        <option>{traitsList[31]}</option>
                        <option>{traitsList[32]}</option>
                        <option>{traitsList[33]}</option>
                    </select>                        
                </div>
                <p>Description:</p>

                <h5>Trait Two</h5>
                <div class='select'>
                    <select>
                        <option>Traits</option>
                        <option>{traitsList[0]}</option>
                        <option>{traitsList[1]}</option>
                        <option>{traitsList[2]}</option>
                        <option>{traitsList[3]}</option>
                        <option>{traitsList[4]}</option>
                        <option>{traitsList[5]}</option>
                        <option>{traitsList[6]}</option>
                        <option>{traitsList[7]}</option>
                        <option>{traitsList[8]}</option>
                        <option>{traitsList[9]}</option>
                        <option>{traitsList[10]}</option>
                        <option>{traitsList[11]}</option>
                        <option>{traitsList[12]}</option>
                        <option>{traitsList[13]}</option>
                        <option>{traitsList[14]}</option>
                        <option>{traitsList[15]}</option>
                        <option>{traitsList[16]}</option>
                        <option>{traitsList[17]}</option>
                        <option>{traitsList[18]}</option>
                        <option>{traitsList[19]}</option>
                        <option>{traitsList[20]}</option>
                        <option>{traitsList[21]}</option>
                        <option>{traitsList[22]}</option>
                        <option>{traitsList[23]}</option>
                        <option>{traitsList[24]}</option>
                        <option>{traitsList[25]}</option>
                        <option>{traitsList[26]}</option>
                        <option>{traitsList[27]}</option>
                        <option>{traitsList[28]}</option>
                        <option>{traitsList[29]}</option>
                        <option>{traitsList[30]}</option>
                        <option>{traitsList[31]}</option>
                        <option>{traitsList[32]}</option>
                        <option>{traitsList[33]}</option>
                    </select>                        
                </div>
                <p>Description:</p>

            </div>

        </div>
    );
};

export default CharTraits;