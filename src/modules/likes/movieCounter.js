const movieCounter = () => {
  const totalMovies = document.querySelector('#totalMovies');
  totalMovies.innerHTML = document.querySelectorAll('.tv-section').length + 1;
  return Number(totalMovies.innerHTML);
};

export default movieCounter;
