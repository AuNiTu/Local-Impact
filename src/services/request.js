const request = async (path, method, body) => {
  const res = await fetch(`https://local-impact.herokuapp.com${path}`, {
    method,
    headers: body ? { 'Content-Type': 'application/json', } : {},
    body: body ? JSON.stringify(body) : null,
    credentials: 'include'
  });

  if (!res.ok) throw await res.json();

  return res.json();

};

export const post = (path, body) => request(path, 'POST', body);
export const get = (path) => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
