import React from "react";

const CharDescription = ({name, charName}) => {
    const userName = name[0];
    return (
        <div className="container">
            <div>
                <div>
                    <img></img>
                </div>
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
            </div>
            <div>
                Written Description
            </div>
        </div>
    );
};

export default CharDescription;