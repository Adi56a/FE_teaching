const grid  = document.getElementById('grid')
const timerDisplay  = document.getElementById('timer')
const restartButton  = document.getElementById('restartButton')

let cards  = [];
let flippedCards  = [];
let matchedCards  = [];




const cardValues  = ['🍇','🍈','🍉','🍊','🍌','🍍','🍎','🍏'];
const shuffledCards  = [...cardValues , ...cardValues].sort(() => Math.random() - 0.5);




function generateCards(){
     cards  = shuffledCards.map((value, index) => {
        const card  = document.createElement('div');
        card.classList.add('card');
        card.dataset.id  = index;
        card.dataset.value = value;
        
        card.addEventListener('click',flipCard);
        
        grid.appendChild(card); 
        })
}





