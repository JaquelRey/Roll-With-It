import React from "react";
import './stats.css';

const CharStats = () => {
    const stats = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    return (
        <div>
            <div id='stats'>
                <h5>Stats</h5>
            </div>
            <div id='stats-display'>
                {stats.forEach(element => {
                    <div key={element}>
                        <div>{element}</div>
                        <div>box</div>
                        <div>bubble</div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default CharStats;