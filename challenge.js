function myTimer() {
    counterElement.innerHTML = ++timerCounter;
    likes = 0
};

function switchAble(){
    addButton.disabled = !addButton.disabled
    subButton.disabled = !subButton.disabled
    heartButton.disabled = !heartButton.disabled
}

let counterElement = document.getElementById("counter")
let timerCounter = 0
let pauseButton = document.querySelector('#pause')
let myVar = setInterval(myTimer, 1000);
let addButton = document.getElementById('+')
let subButton = document.getElementById('-')
let likesList = document.querySelector('.likes')
let heartButton = document.getElementById('<3')
let commentForm = document.querySelector('#comment-form')
let commentList = document.querySelector('#list')

pauseButton.addEventListener('click', function(event) {
    if (pauseButton.innerText === "pause") {
        clearInterval(myVar)
        pauseButton.innerText = "resume"
        switchAble()
    } else {
        myVar = setInterval(myTimer, 1000)
        pauseButton.innerText = "pause"
        switchAble()
    }
});

addButton.addEventListener('click', function(event) {
    myTimer()
});

subButton.addEventListener('click', function(event) {
    if (timerCounter > 0) counterElement.innerHTML = --timerCounter;
});

function addNewList(likes) {
    if (likes === 1) {
        let line = document.createElement('li')
        line.dataset.num = timerCounter
        line.innerHTML = `${timerCounter} has been liked <span>${likes}</span> time`
        likesList.appendChild(line)
    } else {
        let exists = document.querySelector(`li[data-num='${timerCounter}']`)
        exists.innerHTML = `${timerCounter} has been liked <span>${likes}</span> times`
    }
};

let likes = 0

heartButton.addEventListener('click', function(event){
    likes++
    addNewList(likes)
});

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let newComment = document.createElement('p')
    newComment.innerText = commentForm.querySelector('input').value
    commentForm.reset();
    commentList.appendChild(newComment)
});