document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('title');
  const searchContainer = document.getElementById('search-container');
  const searchbox = document.getElementById('searchbox');
  const searchbtn = document.getElementById('searchbtn');
  const movie_container = document.getElementById('movie_container');
  const loader = document.getElementById('loader');
  const overlay = document.getElementById('detailOverlay');
  const detailCard = document.getElementById('detailCard');
  const detailClose = document.getElementById('detailClose');
  const detailImg = document.getElementById('detailImg');
  const detailTitle = document.getElementById('detailTitle');
  const detailYear = document.getElementById('detailYear');
  const detailGenre = document.getElementById('detailGenre');
  const detailPlot = document.getElementById('detailPlot');

 



  new TypeIt('#title', {
    strings: ['Search Your Favorite Movie 🎬🔍'],
    speed: 100,
    breakLines: false,
    afterComplete: (step) => {
      gsap.to(searchContainer, { opacity: 1, y: 0, duration: 1 });
      step.destroy();
    }
  }).go();

  gsap.set(searchContainer, { y: -50 });
  gsap.set('.movie_container', { y: 50 });

  
  async function fetchMovies() {
    const query = searchbox.value.trim();
    if (!query) return;
    loader.style.display = 'block';
    movie_container.innerHTML = '';
    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=b289524a`);
      const data = await res.json();
      loader.style.display = 'none';
      if (data.Response === 'True') {
        data.Search.forEach((mv) => createCard(mv, data.Search));
        gsap.to('.movie_container', { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
      } else {
        movie_container.innerHTML = `<h2 style="color:#ff3d00">No movies found</h2>`;
      }
    } catch (e) {
      console.error(e);
      loader.style.display = 'none';
    }
  }


  function createCard(movie, allMovies) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${movie.Poster!=='N/A'? movie.Poster : 'https://via.placeholder.com/300x450'}" alt="${movie.Title}" />
      <div class="card-details">
        <div class="title">${movie.Title}</div>
        <div class="year">${movie.Year}</div>
      </div>`;
    movie_container.appendChild(card);
    VanillaTilt.init(card,{ max: 15, speed:400, glare:true,'max-glare':0.2 });

    card.addEventListener('click', () => openDetail(movie));
  }

 
  function openDetail(movie) {
   
    detailImg.src = movie.Poster!=='N/A'? movie.Poster : 'https://via.placeholder.com/600x300';
    detailTitle.textContent = movie.Title;
    detailYear.textContent = `Year: ${movie.Year}`;
    detailGenre.textContent = `Genre: Drama, Action, Thriller`;
    detailPlot.textContent = `Plot: This is a thrilling journey of ${movie.Title} that explores suspense, drama, and unexpected twists in every scene.`;
    
    overlay.style.display = 'flex';
    gsap.to(detailCard, { scale:1, opacity:1, duration:0.5, ease:'back.out(1.7)' });
  }

  
  detailClose.addEventListener('click', () => {
    gsap.to(detailCard, { scale:0.5, opacity:0, duration:0.3, ease:'back.in(1.7)' })
      .then(() => (overlay.style.display = 'none'));
  });

  searchbtn.addEventListener('click', fetchMovies);
  searchbox.addEventListener('keydown', (e) => e.key==='Enter' && fetchMovies());
});
