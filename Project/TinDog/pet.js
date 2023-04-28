class Pet {
    constructor(data) {
        Object.assign(this, data);
    }
    getPetHtml() {
        const {name, avatar, age, bio} = this
        return `
                <div class="feature-suggestion">
                    <div class="pet-info">
                        <h4>${name}, ${age}</h4>
                        <div class="pet-bio">
                            ${bio}
                        </div>
                    </div>
                    <img class="pet-img" src="${avatar}"/>
                </div>
                `
    }
    
    likeBadge() {
        return `
                <div class="like-badge>
                    <img src="./images/badge-like.png">
                </div>
                `
    }

    rejectBadge() {
        return `
                <div class="reject-badge">
                    <img src="./images/badge-nope.png">
                </div>
                `
    }
}

export default Pet