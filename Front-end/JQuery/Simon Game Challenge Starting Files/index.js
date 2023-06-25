let buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern = []
let level = 0

const nextSequence = () => {
    const randomNumber = Math.floor(Math.random() * 4)
    const randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100)
    soundEffect(randomChosenColor)
    userClickedPattern = []
    level += 1
}

const soundEffect = (sound) => {
    let audio = new Audio(`./sounds/${sound}.mp3`)
    audio.play()
}

const checkAnswer = (index) => {
    if(gamePattern[index] === userClickedPattern[index] ) {
        setTimeout(() => {
            $('h1').text(`Level ${level}`)
            nextSequence()
        }, 1000)
    } else {
        $('h1').text(`Game Over, Press Any Key to Restart`)
        userClickedPattern = []
        gamePattern = []
        level = 0
    }
}

$('.btn').click(function () {
    const userChosenColor = $(this).attr('id')
    userClickedPattern.push(userChosenColor)
    soundEffect(userChosenColor)
    $(this).addClass('pressed')
    setTimeout(function () {
        $(`.${userChosenColor}`).removeClass('pressed')
    }, 100)
    if (userClickedPattern.length === gamePattern.length) {
        checkAnswer(userClickedPattern.length - 1)
    }
})

$(document).on('keypress', () => {
    if (gamePattern.length === 0 || level === 0) {
        $('h1').text(`Level ${level}`)
        nextSequence()
    }
})
