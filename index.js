// Creating variables that call on the scoreline

let homeScore = document.querySelector('.home-score')
let guestScore = document.querySelector('.guest-score')

let homeCount = 0
let guestCount = 0

//Creating the onClick functions for the buttons

function homePlus() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function homeMinus() {
    homeCount -= 1
    if (homeCount >= 0) {
        homeScore.textContent = homeCount
    } else {
        homeCount = 0
    }
}

function guestPlus() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function guestMinus() {

    guestCount -= 1

    if (guestCount >= 0) {
        guestScore.textContent = guestCount
    } else {
        guestCount = 0
    }
}