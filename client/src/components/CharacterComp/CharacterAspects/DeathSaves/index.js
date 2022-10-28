import React from "react";

const DeathSaves = () => {
    return (
        <div className="container">
            <div>
                <h5>Saving Throws</h5>
            </div>
            <div>
                <h6>Successes</h6>
                <div class='control'>
                    <label class='radio'>
                        <input type='radio' name='successes'/>
                    </label>
                </div>
                <div class='control'>
                    <label class='radio'>
                        <input type='radio' name='successes'/>
                    </label>
                </div>
                <div class='control'>
                    <label class='radio'>
                        <input type='radio' name='successes'/>
                    </label>
                </div>
            </div>
            <div>
                <h6>Failures</h6>
                <div class='control'>
                    <label class='radio'>
                        <input type='radio' name='successes'/>
                    </label>
                </div>
                <div class='control'>
                    <label class='radio'>
                        <input type='radio' name='successes'/>
                    </label>
                </div>
                <div class='control'>
                    <label class='radio'>
                        <input type='radio' name='successes'/>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DeathSaves;