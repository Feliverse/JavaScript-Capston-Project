/* eslint-disable no-unused-vars */
import movieCounter from './movieCounter.js';
import postLikes from './postLikes.js';
import getMovieLikes from './getLikes.js';
// import showCommentPopUp from '../comments/getComment.js';

const displayMovies = async () => {
  const request = await fetch('https://api.tvmaze.com/shows');
  const response = await request.json();
  const section = document.querySelector('#section');
  response.forEach(async (movie) => {
    const movieID = `${movie.id}`;
    const movieLike = await getMovieLikes(movieID);

    movieCounter();

    section.innerHTML += `
      <section id=${movie.id} class="tv-section">
        <div class="tv-main-info tv-div">
          <img src="${movie.image.medium}" class="tv-main-img" alt="${movie.name}" />
        </div>
        <div class="tv-other-info">
          <div class="tv-div">
            <h2 class="tv-name">${movie.name}</h2>
            <span class="tv-likes"
              ><p id="like-${movie.id}" class="tv-nbrOfLikes">${movieLike}</p>
              <button class="heart-button tv-likes-img" type="button"><div class="heart" id=${movie.id}></div></button>
            </span>
          </div>
          <div class="tv-div">
            <button id=${movie.id} class="comment button">&#128172 Comments</button>
            <button class="reservation button">Reservation</button>
          </div>
        </div>
      </section>
    `;

    const likeButtons = section.querySelectorAll('.heart-button');
    likeButtons.forEach(async (likeButton) => {
      likeButton.addEventListener('click', async (e) => {
        e.preventDefault();
        await postLikes(e.target.id);
        const likeContent = e.target.parentElement.parentElement.firstChild;
        const previousNbrOfLikes = Number(likeContent.innerText);
        const newNbrOfLikes = previousNbrOfLikes + 1;
        likeContent.innerText = newNbrOfLikes;
      });
    });
    // showCommentPopUp();
  });
};

export default displayMovies;
