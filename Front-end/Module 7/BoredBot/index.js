document.getElementById('btn').addEventListener('click', render);


function render() {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            document.getElementById('sthg-to-do').textContent = data.activity;
        })
        .catch(error => {
            console.log(error);
        })
}