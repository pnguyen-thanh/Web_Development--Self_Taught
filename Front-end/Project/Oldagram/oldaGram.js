let mainEl = document.getElementById("main-el");
let users = [
    { 
        Name: "Vincent van Gogh",
        Avatar: "images/avatar-vangogh.jpg",
        Post: "images/post-vangogh.jpg",
        Location: "Zudert, Netherlands",
        NumOfLikes: 21.492,
        UserNameApp: "vincey1853",
        Comment: "just took a few mushrooms lol"
    },
    {
        Name: "Gustave Courbet",
        Avatar: "images/avatar-courbet.jpg",
        Post: "images/post-courbet.jpg",
        Location: "Ornans, France",
        NumOfLikes: 12.502,
        UserNameApp: "gus1819",
        Comment: "I'm feeling a bit stressed tbh"
    },
    {
        Name: "Joseph Ducreux",
        Avatar: "images/avatar-ducreux.jpg",
        Post: "images/post-ducreux.jpg",
        Location: "Paris, France",
        NumOfLikes: 15.137,
        UserNameApp: "jd1735",
        Comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!"
    }
];

for (let i = 0; i < users.length; i++) {
    mainEl.innerHTML += `
    <section id="out">
        <div id="in">
            <img id="avatar" src="${users[i].Avatar}">
            <div id="user-info">
                <p id="user-name">${users[i].Name}</p>
                <p id="user-location">${users[i].Location}</p>    
            </div>
        </div>
        <img id="post" src="${users[i].Post}">
        <div id="interaction-section">
            <div id="interact">
                <img id="heart" src="images/icon-heart.png">
                <img id="comment" src="images/icon-comment.png">
                <img id="share" src="images/icon-dm.png">
            </div>
            <p id="like">${users[i].NumOfLikes} likes</p>
            <p id="expression">${users[i].UserNameApp} ${users[i].Comment}</p>
        </div>
    </section>
    `
};