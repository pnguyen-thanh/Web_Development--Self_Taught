import Pet from './pet.js'
import dogsData from './data.js';

let currentPet = new Pet(dogsData[0]);
let index = 0;

document.getElementById('reject-btn').addEventListener('click', reject);
document.getElementById('like-btn').addEventListener('click', like);

function reject() {
    nextPet()
}

function like() {
    document.getElementById('card').innerHTML +``= currentPet.likeBadge();
    nextPet()
}

function nextPet() {
    setTimeout(()=> {
        index < dogsData.length - 1 ? index += 1 : index
        currentPet = new Pet(dogsData[index])
        render()
    }, 1500)
}

function render() {
    document.getElementById('card').innerHTML = currentPet.getPetHtml();
}


render();