import { tweetsData } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const tweetInput = document.getElementById('tweet-input');

document.addEventListener("click", function(e) {
    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like);
    } else if (e.target.dataset.retweet) {
        handleRetweetClick(e.target.dataset.retweet);
    } else if (e.target.dataset.comment) {
        handleReplyClick(e.target.dataset.comment);
    } else if (e.target.id === "tweet-btn") {
        handleTweetBtnClick();
    }
})

function handleLikeClick(tweetId) {
    const targetTweetObj = tweetsData.filter(function(tweet) {
        return tweet.uuid === tweetId
    })[0]
    if (targetTweetObj.isLiked) {
        targetTweetObj.likes -= 1;     
    } else {
        targetTweetObj.likes += 1;
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked;
    render();
}

function handleRetweetClick(tweetId) {
    const targetTweetObj = tweetsData.filter(function(tweet) {
        return tweet.uuid === tweetId;
    })[0];
    if (targetTweetObj.isRetweeted) {
        targetTweetObj.retweets -= 1;
    } else {
        targetTweetObj.retweets += 1;
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;
    render();
}

function handleReplyClick(commentId) {
    document.getElementById(`replies-${commentId}`).classList.toggle("hidden");
}

function handleTweetBtnClick() {
    if (tweetInput.value) {
        tweetsData.unshift({
            handle: `@Scrimba`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
    }
    tweetInput.value = "";
    render()
}

function getFeedHtml(){  
    let feedHtml = ``
    tweetsData.forEach(function(tweet){
        let likeClass = ''
        let retweetClass = ''
        if (tweet.isLiked) {
            likeClass = 'liked'
        } else if (tweet.isRetweeted) {
            retweetClass = 'retweeted'
        }
        let repliesHtml =''
        if (tweet.replies.length > 0) {
            tweet.replies.forEach(function(reply) {
                repliesHtml += 
                `
                <div class="tweet-reply">
                    <div class="tweet-inner">
                        <img src="${reply.profilePic}" class="profile-pic">
                        <div>
                            <p class="handle">${reply.handle}</p>
                            <p class="tweet-text">${reply.tweetText}</p>
                        </div>
                    </div>
                </div>
                `
            })
        }
        feedHtml += `
        <div class="tweet">
            <div class="tweet-inner">
                <img src="${tweet.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-regular fa-comment" data-comment="${tweet.uuid}"></i>
                            ${tweet.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-heart ${likeClass}" data-like="${tweet.uuid}"></i>
                            ${tweet.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet ${retweetClass}" data-retweet="${tweet.uuid}"></i>
                            ${tweet.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
            <div class="hidden" id="replies-${tweet.uuid}">
                ${repliesHtml}
            </div>  
        </div>
        `
    })
    return feedHtml 
}

function render() {
    document.getElementById('feed').innerHTML = getFeedHtml();
}

render();