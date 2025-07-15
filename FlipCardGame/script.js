const grid  = document.getElementById('grid')
const timerDisplay  = document.getElementById('timer')
const restartButton  = document.getElementById('restartButton')

let cards  = [];
let flippedCards  = [];
let matchedCards  = [];




const cardValues  = ['🍇','🍈','🍉','🍊','🍌','🍍','🍎','🍏'];
const shuffledCards  = [...cardValues , ...cardValues].sort(() => Math.random() - 0.5);


function generateCards(){

}

