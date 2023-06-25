const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');
const modalDeclineBtn = document.getElementById('modal-btn');

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

modalDeclineBtn.addEventListener('mouseover', function(){
    document.getElementById('modal-choice-btns').classList.toggle('sort');
});

consentForm.addEventListener('submit', function(e){
    e.preventDefault();
    const consentFormData = new FormData(consentForm);
    const name = consentFormData.get('fullName');
    const email = consentFormData.get('email');

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>
    `
    setTimeout(function(){
        document.getElementById('uploadText').innerText = `
        Making a scale...`;
    }, 1500)

    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `
        modalCloseBtn.disabled = false;
    }, 3000)
});