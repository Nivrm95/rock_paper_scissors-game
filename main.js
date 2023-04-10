// modal
var rulesModal = document.getElementById('rulesModal');
var closeButton = document.getElementById('close');
var rulesButton = document.getElementById('rulesButton');
var elNumber = document.querySelector('.number');
if (rulesButton && rulesModal && closeButton) {
    rulesButton.addEventListener('click', function () {
        console.log('test');
        rulesModal.classList.add('open-modal');
    });
    closeButton.addEventListener('click', function () {
        rulesModal.classList.remove('open-modal');
    });
}
// after click go to new main screen
var mainScreen = document.getElementById('containerMain');
var battleScreen = document.getElementById('containerBattle');
var childMainScreen = document.createElement('div');
var mapButton = Array.from(document.querySelectorAll('.button'));
var choosingIcon = document.getElementById('firstMain');
childMainScreen.setAttribute('id', 'childMainScreen');
mapButton.map(function (button, idx) {
    button.addEventListener('click', function () {
        // choosingIcon.style.display= 'none';
        // const secondMain= document.createElement('button');
        // secondMain.className=button.className
        // secondMain.setAttribute("id",'iconButton')
        // secondMain.innerHTML = button.innerHTML;
        // mainScreen.appendChild(childMainScreen)
        // childMainScreen.appendChild(secondMain)
        mainScreen.style.display = 'none';
        battleScreen.classList.remove('none');
        var playerBtn = document.querySelector('.player');
        playerBtn.appendChild(button.cloneNode(true));
        setTimeout(function () {
            var randomNumber = Math.floor(Math.random() * 3);
            var computerBtn = document.querySelector('.computer');
            computerBtn.appendChild(mapButton[randomNumber].cloneNode(true));
            compare(idx, randomNumber);
        }, 1000);
    });
});
// 0 - yad   1 - rock  2   scissors
function compare(playerChoise, computerChoise) {
    var elstatus = document.querySelector('.status');
    // let currScore = Number(elNumber.innerHTML);
    if (playerChoise === computerChoise) {
        elstatus.innerHTML = 'Draw!';
    }
    else if (playerChoise === 0 && computerChoise == 1) {
        setLoseStatus();
    }
    else if (playerChoise === 1 && computerChoise == 0) {
        setLoseStatus();
    }
    else if (playerChoise === 0 && computerChoise == 2) {
        setLoseStatus();
    }
    else if (playerChoise === 2 && computerChoise == 0) {
        setWinStatus();
    }
    else if (playerChoise === 1 && computerChoise == 2) {
        setWinStatus();
    }
    else if (playerChoise === 2 && computerChoise == 1) {
        setLoseStatus();
    }
    // createPlayAgainBtn();
}
// function createPlayAgainBtn() {
//   const playAgainBtn = document.createElement('button');
//   playAgainBtn.innerHTML = 'Play Again';
//   playAgainBtn.addEventListener('click', () => {
//     console.log('hhh');
//     mainScreen.style.display = 'flex';
//     battleScreen.classList.add('none');
//   });
//   battleScreen.appendChild(playAgainBtn);
// }
function playAgain() {
    mainScreen.style.display = 'flex';
    battleScreen.classList.add('none');
    battleScreen.innerHTML = "\n  <div class=\"player relative\">\n  <h3>You Picked</h3>\n  </div>\n\n<div class =\"middle\">\n<div class=\"status\">\n\n</div>\n\n<button onclick=\"playAgain()\">Play again</button>\n</div>\n    <div class=\"computer relative\">\n  <h3>The House Picked</h3>\n\n   </div>\n\n\n\n";
}
function setWinStatus() {
    var elstatus = document.querySelector('.status');
    var currScore = +elNumber.innerHTML;
    currScore += 1;
    elNumber.innerHTML = currScore + '';
    elstatus.innerHTML = 'You Win!';
}
function setLoseStatus() {
    var elstatus = document.querySelector('.status');
    var currScore = +elNumber.innerHTML;
    currScore -= 1;
    elNumber.innerHTML = currScore + '';
    elstatus.innerHTML = 'You Lose!';
}
