import React from "react";

const CharSavingThrows = () => {
    return (
        <div className="container">
            <div>
                <h5>Saving Throws</h5>
            </div>
            <div id='strength'>
                <h6>Strength</h6>
                <input class="input" type="text" placeholder="Strength"></input>
                <div class='control'>
                    <label class='radio'>
                        <input type='radio' name='strengthRadio'/>
                    </label>
                </div>
            </div>
            <div id='dexSave'>
                <h6>Dexterity</h6>
                <input class="input" type="text" placeholder="Dexterity"></input>
                <div class='control'>
                    <label class='radio'>
                        <input type='radio' name='dexRadio'/>
                    </label>
                </div>
            </div>
            <div id='constSave'>
                <h6>Constitution</h6>
                <input class="input" type="text" placeholder="Constitution"></input>
                <div class='control'>
                    <label class='radio'>
                        <input type='radio' name='constRadio'/>
                    </label>
                </div>
            </div>
            <div id='intSave'>
                <h6>Intelligence</h6>
                <input class="input" type="text" placeholder="Intelligence"></input>
                <div class='control'>
                    <label class='radio'>
                        <input type='radio' name='intRadio'/>
                    </label>
                </div>
            </div>
            <div id='wisdomeSave'>
                <h6>Wisdom</h6>
                <input class="input" type="text" placeholder="Wisdom"></input>
                <div class='control'>
                    <label class='radio'>
                        <input type='radio' name='wisdomeRadio'/>
                    </label>
                </div>
            </div>
            <div id='charismaSave'>
                <h6>Charisma</h6>
                <input class="input" type="text" placeholder="Charisma"></input>
                <div class='control'>
                    <label class='radio'>
                        <input type='radio' name='charismaRadio'/>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default CharSavingThrows;