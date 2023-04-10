// modal

let rulesModal = document.getElementById('rulesModal');
let closeButton = document.getElementById('close');
let rulesButton = document.getElementById('rulesButton');
const elNumber = document.querySelector('.number');
if (rulesButton && rulesModal && closeButton) {
  rulesButton.addEventListener('click', () => {
    console.log('test');

    rulesModal.classList.add('open-modal');
  });

  closeButton.addEventListener('click', () => {
    rulesModal.classList.remove('open-modal');
  });
}

// after click go to new main screen
let mainScreen = document.getElementById('containerMain');
let battleScreen = document.getElementById('containerBattle');
let childMainScreen = document.createElement('div');
let mapButton = Array.from(document.querySelectorAll('.button'));
let choosingIcon = document.getElementById('firstMain');
childMainScreen.setAttribute('id', 'childMainScreen');

mapButton.map((button, idx) => {
  button.addEventListener('click', () => {
    // choosingIcon.style.display= 'none';
    // const secondMain= document.createElement('button');
    // secondMain.className=button.className
    // secondMain.setAttribute("id",'iconButton')
    // secondMain.innerHTML = button.innerHTML;
    // mainScreen.appendChild(childMainScreen)
    // childMainScreen.appendChild(secondMain)
    mainScreen.style.display = 'none';
    battleScreen.classList.remove('none');
    const playerBtn = document.querySelector('.player');
    playerBtn.appendChild(button.cloneNode(true));
   setTimeout(()=>{
    const randomNumber = Math.floor(Math.random() * 3);
    const computerBtn = document.querySelector('.computer');
    computerBtn.appendChild(mapButton[randomNumber].cloneNode(true));
    compare(idx, randomNumber);
   },1000)
  });
});
// 0 - yad   1 - rock  2   scissors
function compare(playerChoise, computerChoise) {
  const elstatus = document.querySelector('.status');
  // let currScore = Number(elNumber.innerHTML);
  if (playerChoise === computerChoise) {
    elstatus.innerHTML = 'Draw!';
  } else if (playerChoise === 0 && computerChoise == 1) {
    setLoseStatus();
  } else if (playerChoise === 1 && computerChoise == 0) {
    setLoseStatus();
  } else if (playerChoise === 0 && computerChoise == 2) {
    setLoseStatus();
  } else if (playerChoise === 2 && computerChoise == 0) {
    setWinStatus();
  } else if (playerChoise === 1 && computerChoise == 2) {
    setWinStatus();
  } else if (playerChoise === 2 && computerChoise == 1) {
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
  battleScreen.innerHTML = `
  <div class="player relative">
  <h3>You Picked</h3>
  </div>

<div class ="middle">
<div class="status">

</div>

<button onclick="playAgain()">Play again</button>
</div>
    <div class="computer relative">
  <h3>The House Picked</h3>

   </div>



`;
}

function setWinStatus() {
  const elstatus = document.querySelector('.status');
  let currScore = +elNumber.innerHTML;
  currScore += 1;
  elNumber.innerHTML = currScore + '';
  elstatus.innerHTML = 'You Win!';
}

function setLoseStatus() {
  const elstatus = document.querySelector('.status');
  let currScore = +elNumber.innerHTML;
  currScore -= 1;
  elNumber.innerHTML = currScore + '';
  elstatus.innerHTML = 'You Lose!';
}
