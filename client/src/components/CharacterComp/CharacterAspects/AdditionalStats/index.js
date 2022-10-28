import React from "react";

const CharAdditionalStats = () => {
    return (
        <div>
            <div>
                <h5>Proficiency</h5>
                <input class="input" type="text" id="Proficiency" placeholder="Proficiency"></input>
            </div>
            <div>
                <h5>Insparation</h5>
                <input class="input" type="text" id="Inspiration" placeholder="Inspiration"></input>
            </div>
            <div>
                <h5>Armor Class</h5>
                <input class="input" type="text" id="Armor Class" placeholder="Armor Class"></input>
            </div>
            <div>
                <h5>Walking Speed</h5>
                <input class="input" type="text" id="Walking Speed" placeholder="Walking Speed"></input>
            </div>            
            <div>
                <h5>Initiative</h5>
                <input class="input" type="text" id="Initiative" placeholder="Initiative"></input>
            </div>            
        </div>
    );
};

export default CharAdditionalStats;