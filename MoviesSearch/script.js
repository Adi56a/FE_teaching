const searchbox  = document.getElementById('searchbox')
const searchbtn = document.getElementById('searchbtn')
const movie_container = document.getElementById('movie_container')


searchbtn.addEventListener('click' , async function(){
       if(searchbox.value.trim()  !== ""){
         let name  = String(searchbox.value);
         let response = await fetch(`http://www.omdbapi.com/?s=${name}&apikey=b289524a`)
         let data  = await response.json()

          
         if(data.Response === "True"){
            movie_container.innerHTML =""
           data.Search.forEach(val => {
            
            let card  = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
               <img src="${val.Poster}" alt="Movie image">
               <div class="card-details">
                <div class="title">${val.Title}</div>
                <div class="year">${val.Year}</div>

               </div>
            `;
           
             movie_container.appendChild(card);
            });
           }else{
            movie_container.innerHTML = "<h3>No Movies Found </h3>"
           }
      
              

       }
} );














