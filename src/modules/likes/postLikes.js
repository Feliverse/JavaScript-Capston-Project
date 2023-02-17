const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'g9eRucs5qtKLjf0q60oq';
const appUrl = `${baseUrl}${appID}/likes`;

const postLikes = async (id) => {
  const request = await fetch(appUrl, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const response = request;
  return response;
};

export default postLikes;
