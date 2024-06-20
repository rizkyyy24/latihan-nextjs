export const getTopAnme = async (resource, query) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/top/${resource}?${query}`
  );
  const topAnime = response.json();

  return topAnime;
};

export const getAnimeDetails = async (resource) => {
  const response = await fetch(`https://api.jikan.moe/v4/${resource}`);
  const animeDetails = response.json();

  return animeDetails;
};
