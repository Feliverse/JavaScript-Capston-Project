const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'g9eRucs5qtKLjf0q60oq';
const appUrl = `${baseUrl}${appID}/likes`;

const getAllLikes = async () => {
  const request = await fetch(appUrl);
  const response = await request.json();
  return response;
};

const getMovieLikes = async (movieID) => {
  const allLikes = await getAllLikes();
  const filteredLikes = await allLikes.filter(
    (item) => item.item_id === movieID,
  );
  return filteredLikes[0].likes;
};

export default getMovieLikes;
