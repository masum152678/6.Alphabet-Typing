function playGame(){
    const hideHome = hideElementbyId('home-content')
    const showPlayground = showElementById('playground-content')
    const myAlphabet = getRandomAlphabet()
    // console.log(myAlphabet)
    const  getCurrentAlphabet = document.getElementById('current-alphabet')
    getCurrentAlphabet.innerText = myAlphabet
    setBackgroundById(myAlphabet)
}

function hideElementbyId(elementId){
    const hideId = document.getElementById(elementId)
    hideId.classList.add('hidden')
    return hideId
}
function showElementById(elementId){
    const showId = document.getElementById(elementId)
    showId.classList.remove('hidden')
    return showId
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId)
    const elementText = element.innerText
    const value = parseInt(elementText)
    return value
}
function setScoreInDisplay(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value
}

function getRandomAlphabet(){
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const alphabet = alpha.split('')
    const randomNum = Math.random()*25
    const index = Math.round(randomNum)
    const randomAlphabet = alphabet[index]
    return randomAlphabet

}

function setBackgroundById(elementId){
    const background = document.getElementById(elementId)
    background.classList.add('bg-[#FFA500]')
}
function removeBanckgroundColorById(elementId){
    const background = document.getElementById(elementId)
    background.classList.remove('bg-[#FFA500]')
    
}

function addEventsByKeysUp(event){
    const playerPressed = event.key
    const myAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase()
    
    if(playerPressed === myAlphabet){
        const currentScore = getElementValueById('current-score')
        newScore = currentScore + 1
        console.log(newScore)
        setScoreInDisplay('current-score', newScore)

        removeBanckgroundColorById(myAlphabet)
        playGame()
        
    }
    else if(playerPressed == 'Escape'){
        gameOver()
    }
    else{
        const currentLifeElement =  getElementValueById('current-life')
        newLife = currentLifeElement - 1
        setScoreInDisplay('current-life', newLife)
        if(newLife == 0){
            gameOver()

        }
    }

}
document.addEventListener('keyup',addEventsByKeysUp)

function gameOver(){
            hideElementbyId('playground-content')
            showElementById('final-score')

            const currentScore = getElementValueById('current-score')
            setScoreInDisplay('ultimate-score', currentScore)
}

function playAgain(){
    hideElementbyId('final-score')
    showElementById('playground-content')
    setScoreInDisplay('current-life', 5)
    setScoreInDisplay('current-score', 0)
}
