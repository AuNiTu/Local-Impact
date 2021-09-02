export const fetchNews = async (search) => {
  const res = await fetch(
    `https://gnews.io/api/v4/search?q=${search}&token=${process.env.NEWS_KEY}`
  );

  const json = await res.json();
  console.log(json);
  return json;

};
