import React from "react";
import './hitPoints.css';

const HitPoints = () => {
    return (
        <div id='hitDice'>
            <div>
                <div>
                    <h4>Hit Dice</h4>
                </div>
                <input class="input" type="text" id="hitDice" placeholder="Hit Dice"></input>
                <div>
                    <h4>Temporary Hit Points</h4>
                    <input class="input" type="text" id="temp" placeholder="Temporary Hit Points"></input>
                </div>
                <div>
                    <h4>Current Hit Points</h4>
                    <input class="input" type="text" id="hitDice" placeholder="Current Hit Points"></input>
                </div>
            </div>
        </div>
    );
};

export default HitPoints;