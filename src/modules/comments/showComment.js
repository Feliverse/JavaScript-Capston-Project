const showComment = async (movieId, name, description) => {
  const data = `{"item_id": "${movieId}", "username": "${name}", "comment": "${description}"}`;

  const mBody = JSON.parse(data);

  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/V9PGHS19NclaPI0zbq7b/comments/',
    {
      method: 'POST',
      body: JSON.stringify(mBody),

      headers: { 'Content-Type': 'application/JSON' },
    });
  // await response; // extract JSON from the http response
  const result = await response.text();
  return result;
};

export default showComment;
