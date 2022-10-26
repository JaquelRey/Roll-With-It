import React from "react";
import UserCard from '../../components/User/UserCard';
import CharacterAspects from '../../components/CharacterComp/CharacterAspects';

const Character = () => {
    return (
        <div className="container">
            <div>
                <CharacterAspects.Stats />
                <CharacterAspects.Skills />
            </div>
            <div>
                <CharacterAspects.HitPoints />
                <CharacterAspects.AdditionalStats />
                <CharacterAspects.SavingThrows />
                <CharacterAspects.Senses />
            </div>
            <div>
                <CharacterAspects.Description />
                <div>
                    <CharacterAspects.FeaturesTraits />
                    <CharacterAspects.SpellsAttacks />
                    <CharacterAspects.Equipment />
                    <CharacterAspects.Inventory />
                </div>
            </div>


        </div>
    );
};

export default Character;