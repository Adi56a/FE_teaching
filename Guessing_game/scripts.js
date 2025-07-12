let randomNumber;
let attempts; 
let userInput  = document.getElementById('userInput')
let submitBtn  = document.getElementById('submit')
let message  = document.getElementById('message')
let attemptsCounter = document.getElementById('attempts')
let restart = document.getElementById('restart')



function startGame(){
    randomNumber = Math.floor(Math.random() * 100) + 1 ;
    attempts = 0; 
    attemptsCounter.textContent = attempts;
    message.textContent = "Good Luck For Your Game !!!!!👍🔥😍"
    console.log(randomNumber)
    
}

startGame()
                         

function checkGuess(){

    let guess  = parseInt(userInput.value);

    if( guess < 1 || guess > 100 ){
        message.textContent = "Please Enter Valid Number👎👎"
        message.style.color = "red"

    }

    attempts++;                  
    attemptsCounter.textContent = attempts;


    if(guess  === randomNumber){
        message.textContent = "Congrats !! You Win The Game😍😍🔥🔥🔥";
        message.style.color = "green"
    }
    else if(guess < randomNumber ){
        message.textContent = "Too Low ! Think of Higher Number  ⬆️⬆️   "
        message.style.color = "orange"
    }else{
        message.textContent = "Too High ! Think Of Lower Number  🔽🔽"
        message.style.color  = "orange"
    }
            
   


}


submitBtn.addEventListener("click", function(){
     checkGuess()
}  )


restart.addEventListener('click', function(){
     startGame();
     userInput.value  = ""
})
