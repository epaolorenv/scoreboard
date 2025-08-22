let updateHomeScore = document.getElementById("update-home-score")
let updateGuestScore = document.getElementById("update-guest-score")
let homeCount = 0
let guestCount = 0

updateGuestScore.textContent = homeCount
updateHomeScore.textContent = guestCount

function plusOneHome() {
    let addOne = 1
    updateHomeScore.textContent = addOne
    homeCount += 1
    updateHomeScore.textContent = homeCount
}

function plusTwoHome() {
    let addTwo = 2
    updateHomeScore.textContent = addTwo
    homeCount += 2
     updateHomeScore.textContent = homeCount
}

function plusThreeHome() {
    let addThree = 3
    updateHomeScore.textContent = addThree
    homeCount += 3
    updateHomeScore.textContent = homeCount
}

// Guest Score

function plusOneGuest() {
    let addOne = 1
    updateGuestScore.textContent = addOne
    guestCount += 1
    updateGuestScore.textContent = guestCount
}

function plusTwoGuest() {
    let addTwo = 2
    updateGuestScore.textContent = addTwo
    guestCount += 2
    updateGuestScore.textContent = guestCount
}

function plusThreeGuest() {
    let addThree = 3
    updateGuestScore.textContent = addThree
    guestCount+= 3
    updateGuestScore.textContent = guestCount
}