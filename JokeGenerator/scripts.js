let btn  = document.getElementById('btn');
let joke_display  = document.getElementById('joke-text')

async function getJoke(){
      
    try {
        const response  = await  fetch('https://api.chucknorris.io/jokes/random')
        const data  = await  response.json();
        const joke  = data.value;
        
        joke_display.textContent = joke;

    } catch (error) {
        joke_display.textContent = error;
    }

 }

 btn.addEventListener('click', getJoke)

