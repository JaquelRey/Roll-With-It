import React from "react";
import './deathSaves.css';

const DeathSaves = () => {
    return (
        <div id="death-saves">
            <div>
                <div class="saving-throws">
                    <h5>Saving Throws</h5>
                </div>
                <div class="throws">
                    <div>
                        <h6>Successes</h6>
                        <div class="toggles">
                            <div class="control">
                                <label class="checkbox">
                                <input type="checkbox"/>
                            </label>
                            </div>
                            <div class='control'>
                                <label class="checkbox">
                                <input type="checkbox"/>
                            </label>
                            </div>
                            <div class='control'>
                                <label class="checkbox">
                                <input type="checkbox"/>
                            </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6>Failures</h6>
                        <div class="toggles">
                            <div class='control'>
                                <label class="checkbox">
                                <input type="checkbox"/>
                            </label>
                            </div>
                            <div class='control'>
                                <label class="checkbox">
                                <input type="checkbox"/>
                            </label>
                            </div>
                            <div class='control'>
                                <label class="checkbox">
                                <input type="checkbox"/>
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeathSaves;