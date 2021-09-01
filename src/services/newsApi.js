export const fetchNews = async (search) => {
  console.log(search);
  const res = await fetch(
    `https://gnews.io/api/v4/search?q=${search}&token=a6e553fa6ab39143454bd99982e6995a`
  );

  const json = await res.json();
  return json;

};


