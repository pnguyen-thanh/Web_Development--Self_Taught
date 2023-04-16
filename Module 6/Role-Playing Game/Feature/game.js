/*
CHALLENGE
1. Convert our consts into two objects called 
"monster" and "hero".
2. Update the renderCharacter() function so that it accepts 
a single object "data" as its parameter instead of five string/numbers, 
reducing the number of arguments to pass in from five to one.
3. Update the template now each variable is coming from "data".
4. Update the function call.
*/

const character = [
    {hero}
]

const heroElementId = "hero"
const heroName = "Wizard"
const heroAvatar = "images/wizard.png"
const heroHealth = 60
const heroDiceRoll = 6

const monsterElementId = "monster"
const monsterName = "Orc"
const monsterAvatar = "images/orc.png"
const monsterHealth = 10
const monsterDiceRoll = 4

function renderCharacter(elementId, name, avatar, health, diceRoll) {
    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                <div class="dice"> ${diceRoll} </div>
            </div>
        </div>`
}

renderCharacter(heroElementId, heroName, heroAvatar, heroHealth, heroDiceRoll);
renderCharacter(monsterElementId, monsterName, monsterAvatar, monsterHealth, monsterDiceRoll);