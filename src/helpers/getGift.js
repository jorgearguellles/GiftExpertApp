
const getGift = async (category) => {
  const limit = 10;
  const api_key = 'ZWQAvvRRPDQe5qVs15sshECKYL22aG1J';
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=${limit}&api_key=${api_key}`;

  const response = await fetch(url);
  const {data} = await response.json();
  const gifts = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      urlImg: img.images?.downsized_medium.url
    }
  })

  return gifts;
};

export { getGift };