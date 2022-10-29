import React from "react";
import './description.css';

const CharDescription = ({name, charName}) => {
    const userName = name[0];
    return (
        <div id="character-desc">
    <div>
        <div>
            <img></img>
        </div>
        <div class="basic-info">
            <div class="info">
                <div>
                    <h5>Character Name</h5>
                </div>
                <input class="input" type="text" id="charName" placeholder="Character Name"></input>
            </div>
            <div class="info">
                <div>
                    <h5>Level:</h5>
                </div>
                <input class="input" type="text" id="level" placeholder="Level"></input>
            </div>
            <div class="info">
                <div>

                    <div>
                        Character Name - {userName}
                    </div>
                    <input class="input" type="text" id="charName" placeholder={charName}></input>
                    <div>
                        Level:
                    </div>
                    <input class="input" type="text" id="level" placeholder="Level"></input>
                    <div>
                        Race:
                    </div>
                    <input class="input" type="text" id="race" placeholder="Race"></input>
                    <div>
                        Class:
                    </div>
                    <input class="input" type="text" id="class" placeholder="Class"></input>
                </div>
                <input class="input" type="text" id="race" placeholder="Race"></input>
            </div>
            <div class="info">
                <div>
                    <h5>Class:</h5>
                </div>
                <input class="input" type="text" id="class" placeholder="Class"></input>
            </div>
        </div>
    </div>
    <div class="written-description">
        <div>
            <h5>Written Description</h5>
        </div>
        <textarea class="textarea" placeholder="Write about your Character!"></textarea>
    </div>
</div>
    );
};

export default CharDescription;