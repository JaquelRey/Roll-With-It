import React from "react";

const CharStats = () => {
    const stats = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    return (
        <div className="container">
            <div>
                <h5>Stats</h5>
            </div>
            {stats.forEach(element => {
                <div key={element}>
                    <div>{element}</div>
                    <div>box</div>
                    <div>bubble</div>
                </div>
            })}
        </div>
    );
};

export default CharStats;