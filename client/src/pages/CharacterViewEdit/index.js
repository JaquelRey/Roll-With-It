import React from "react";
import characterAspects from '../../components/CharacterComp/CharacterAspects/index.jsx';
import './character.css'
const CharacterViewEdit = () => {
    return (
        <div id="CharacterView" className="main">
            <div className="parchment horizontal">
                <div className="parchment-body-horizontal">
                    <div class="row">
                        <div class="col">
                            <characterAspects.CharStats />
                            <characterAspects.CharSkills />
                        </div>
                        <div class="col">
                            <characterAspects.CharHitPoints />
                            <characterAspects.CharAdditionalStats />
                            <characterAspects.CharSavingThrows />
                            <characterAspects.CharSenses />
                        </div>
                        <div class="col">
                            <characterAspects.CharDescription />
                            <div>
                                <characterAspects.CharFeaturesTraits />
                                <characterAspects.CharSpellsAttacks />
                                <characterAspects.CharEquipment />
                                <characterAspects.CharInventory />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default CharacterViewEdit;