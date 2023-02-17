import showComment from './showComment.js';
import getComments from './comments.js';

const getMovieDetails = async (movieId) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);
  const movieDetails = await response.json();
  const popupContainer = document.querySelector('.popup-container');
  const movieName = movieDetails.name;
  const { summary } = movieDetails;
  const { image } = movieDetails;

  let imageSrc = 'https://static.tvmaze.com/uploads/images/original_untouched/53/133615.jpg';

  if (image !== 'null') {
    if (image.original !== 'null') {
      imageSrc = movieDetails.image.original;
    } else {
      imageSrc = movieDetails.image.medium;
    }
  }
  const comments = await getComments(movieId);
  let totalComment = 0;
  if (comments.length > 0) {
    totalComment = comments.length;
  }
  const firstPart = `
    <div class="popup-movie-banner">
          <img
            class="popup-movie-banner-img"
            src="${imageSrc}"
            alt="${movieName} Banner"
          />
        </div>
        <div class="popup-details">
          <div class="popup-title">
            <h2>${movieName}</h2>
          </div>
          <div class="popup-description">
            ${summary} <br>
          </div>

          <div class="popup-comments">
            <h3 class="popup-comments-title">
              Comments<span id="commentConter">(<span id="totalComment">${totalComment}</span>)</span>
            </h3>
            <div class="popu-comments-container">
              <ul class="comment-description">
              `;

  let commentList = '';
  for (let k = 0; k < comments.length; k += 1) {
    const temp = `<li>&#128489 &nbsp &nbsp ${comments[k].creation_date} ${comments[k].username}:&nbsp &nbsp ${comments[k].comment}</li>`;
    commentList += temp;
  }
  const secondPart = `
              </ul>
            </div>
          </div>

          <div class="add-comment-form">
            <form id="addComment">
            <input type="text" placeholder="Your name" name="name" required />
            <input type="hidden" placeholder="Name" name="movieId" value="${movieId}" />
            <input type="text" id="comment" placeholder="add comment" name="comment" required />
              <button id="addComment" type="submit" class="btn btn-outline-primary">&#128490</button>
            </form>
          </div>
        </div>`;

  popupContainer.innerHTML = firstPart + commentList + secondPart;

  const addComment = document.querySelector('#addComment');

  addComment.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = addComment.querySelector('input[name="name"]').value;
    const comment = addComment.querySelector('input[name="comment"]').value;
    const movieId = addComment.querySelector('input[name="movieId"]').value;

    showComment(movieId, name, comment);

    const d = new Date();
    const commentDescription = document.querySelector('.comment-description');
    const commentConter = document.querySelector('#totalComment');

    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    commentDescription.innerHTML += `<li>${ye}-${mo}-${da}  ${name}:   ${comment}</li>`;
    commentConter.innerHTML = Number(commentConter.innerHTML) + 1;
    addComment.reset();
  });
};

const commentsCounter = (comments) => {
  if (!comments.length) {
    return 0;
  }
  return comments.length;
};

export { getMovieDetails, commentsCounter };
