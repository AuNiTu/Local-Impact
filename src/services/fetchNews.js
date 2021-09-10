export const fetchNews = async (search) => {
  const res = await fetch(
    `https://gnews.io/api/v4/search?q=${search}&token=${process.env.NEWS_KEY}`
  );

  const json = await res.json();
  if (json.errors) return { articles: [], totalArticles: 0 };
  return json;

};

export const filterDuplicateNews = (newsArray) => {
  const filteredArray = newsArray.filter((article, index) => {
    return newsArray.indexOf(article) === index;
  });

  return filteredArray;
};
