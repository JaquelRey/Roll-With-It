import React from "react";

const HitPoints = () => {
    return (
        <div className="container">
            <div>
                <div>
                    Hit Dice
                </div>
                <input class="input" type="text" id="hitDice" placeholder="Hit Dice"></input>
                <div>
                    Temp
                </div>
                <div>
                    <div>Max</div>
                    <div>MaxValue</div>
                </div>
                <div>
                    /
                </div>
                <div>
                    <div>Current</div>
                    <div>CurrentValue</div>
                </div>
            </div>
            <div>Hit Points Title</div>
        </div>
    );
};

export default HitPoints;