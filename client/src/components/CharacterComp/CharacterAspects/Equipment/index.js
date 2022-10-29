import React from "react";
import './equipment.css';

const CharEquipment = () => {
    return (
        <div id="inventory">
    <div>
        <h5>Equipment</h5>
        <input class="input" type="text" id="equipment" placeholder="Equipment"></input>
    </div>
    <div>
        <h5>Gold Pieces</h5>
        <input class="input" type="text" id="gold-pieces" placeholder="Gold Pieces"></input>
    </div>
</div>
    );
};

export default CharEquipment;