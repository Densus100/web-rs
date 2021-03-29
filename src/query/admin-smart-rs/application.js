export const getApplication = (cookies) => async () => {
  const res = await fetch(
    "http://app-dev.ejemplo.me/v1/application?sort_unix_created_at=asc",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookies?.token}`,
      },
    }
  );
  return await res.json();
};

export const getApplicationById = (cookies, id) => async () => {
  const formattedId = id.replace(/['"]+/g, "");
  const res = await fetch(
    `http://app-dev.ejemplo.me/v1/application/detail?id=${formattedId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookies?.token}`,
      },
    }
  );
  return await res.json();
};
