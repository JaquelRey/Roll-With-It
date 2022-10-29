import React from "react";
import characterAspects from '../../components/CharacterComp/CharacterAspects/index.jsx';
import './character.css'
import { useQuery } from '@apollo/client';
// import { QUERY_CHARACTERS } from '../../utils/queries';
import { QUERY_USERS } from '../../utils/queries';

const CharacterViewEdit = () => {
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];
    const userName = users.map((user) => (
        user.firstName
    ))
    const charName = users.map((user) => (
        user.characters.map((character) => (
            character.traits.name
        ))
    ))

    return (
        <div id="CharacterView" className="main">
            <div className="parchment horizontal">
                <div className="parchment-body-horizontal">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div class="row main">
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
                                <characterAspects.CharDescription name={userName} charName={charName}/>
                                <div>
                                    <characterAspects.CharFeaturesTraits/>
                                    <characterAspects.CharSpellsAttacks />
                                    <characterAspects.CharEquipment />
                                    <characterAspects.CharInventory />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CharacterViewEdit;