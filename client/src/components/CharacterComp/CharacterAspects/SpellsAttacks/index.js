import React from "react";
import './spells.css';

const CharSpells = () => {
    return (
        <div>
            <div id='spells-section'>
                <h5>Spells</h5>
            </div>
            <div>
                <div>
                    <h6>Spell Name</h6>
                    <input class="input" type="text" placeholder="Spell Name"></input>
                </div>
                <div>
                    <p>Description:</p>
                    <textarea class="textarea" placeholder="Spell Description"></textarea>
                </div>
            </div>
        </div>
    );
};

export default CharSpells;