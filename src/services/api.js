
export const fetchUser = async (username) => {
  const res = await fetch(`https://local-impact.herokuapp.com/${username}`);

  const json = await res.json();

  return json;
};
