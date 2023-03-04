// Creating variables that call on the scoreline

const homeScore = document.querySelector('.home-score')
const guestScore = document.querySelector('.guest-score')
const homePlusBtn = document.getElementById('home-plus-btn')
const homeMinusBtn = document.getElementById('home-minus-btn')
const guestPlusBtn = document.getElementById('guest-plus-btn')
const guestMinusBtn = document.getElementById('guest-minus-btn')

let homeCount = 0
let guestCount = 0

//Here we're creating a function to compare the scores and turn the higher score green
function turnScoreGreen() {
    if (homeCount > guestCount) {
        homeScore.style.color = '#1af51a'
        guestScore.style.color = 'white'
    } else if (guestCount > homeCount) {
        guestScore.style.color = '#1af51a'
        homeScore.style.color = 'white'
    } else {
        guestScore.style.color = 'white'
        homeScore.style.color = 'white'
    }
}

//Creating the onClick functions for the buttons to increment or decrease the score

homePlusBtn.addEventListener('click', function () {
    homeCount += 1
    homeScore.textContent = homeCount
    //Next we're comparing the scores and turning the higher score green accordingly
    turnScoreGreen()
})

homeMinusBtn.addEventListener('click', function () {
    homeCount -= 1

    //We need to make sure the score does not display a negative number

    if (homeCount >= 0) {
        homeScore.textContent = homeCount
    } else {
        homeCount = 0
    }
    turnScoreGreen()
})

guestPlusBtn.addEventListener('click', function () {
    guestCount += 1
    guestScore.textContent = guestCount
    turnScoreGreen()
})

guestMinusBtn.addEventListener('click', function () {

    guestCount -= 1
    if (guestCount >= 0) {
        guestScore.textContent = guestCount
    } else {
        guestCount = 0
    }
    turnScoreGreen()
})
