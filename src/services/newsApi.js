export const fetchNews = async (search) => {
  console.log(search);
  const res = await fetch(
    `https://gnews.io/api/v4/search?q=${search}&token=8abe68986a4ee03be3f5276fbf128ef3

    `
  );

  const json = await res.json();
  return json;

};


