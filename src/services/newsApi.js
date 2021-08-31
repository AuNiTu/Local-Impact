export const newsApi = async (search) => {

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${search}
      &apiKey=${process.env.NEWS_KEY}`
  );

  const json = await res.json();

  return json;
};
