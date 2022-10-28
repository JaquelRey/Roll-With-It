import React from 'react';

const CharacterInfo = require('./index');

const CharacterCard = () => {
    return (
        <div class='card'>
            <div class='card-image'>
                <figure class='image is-4by3'>
                    <img src='#' alt='Placeholder image'></img>
                </figure>
            </div>
            <div class = 'card-content'>
                <div class='media'>
                    <div class='media-left'>
                        <figure class='image is-48x48'>
                            <img src='#' alt='Placeholder image'></img>
                        </figure>
                    </div>
                    <div class='media-content'>
                        <p class='title is-4'>Character Name</p>
                        <p class='character-race is-6'>Race</p>
                        <p class='character-class is-6'>Class</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;