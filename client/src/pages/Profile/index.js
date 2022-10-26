import React from "react";
import UserCard from '../../components/User/UserCard';
import CharacterCard from '../../components/CharacterComp/CharacterCard';

const Profile = () => {
    return (
        <div className="container">
            <div>
                <UserCard>

                </UserCard>
            </div>
            <div>
                {array.forEach(character => {
                    <CharacterCard  key={character.id} />
                })}
            </div>

        </div>
    );
};

export default Profile;
