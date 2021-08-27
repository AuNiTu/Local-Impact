const request = async (path, method, body) => {
  const res = await fetch('postgres://AXDUONG:postgres@localhost:5432/postgres', {
    method,
    header: body
      ? {
        'Content-Type': 'application/json',
      }
      : {},
    body: body ? JSON.stringify(body) : null,
    credentials: 'include',
  });

  if (!res.ok) throw await res.json();

  return res.json();

};

export const post = (path, body) => request(path, 'POST', body);
