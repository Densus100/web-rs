export const getAllMenu = (cookies) => async () => {
  const res = await fetch(
    "http://app-dev.ejemplo.me/v1/menu?sort_unix_created_at=asc&limit=5&mode=table",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookies?.token}`,
      },
    }
  );
  return await res.json();
};

export const getMenuById = (cookies, id) => async () => {
  const formattedId = id.replace(/['"]+/g, "");
  const res = await fetch(
    `http://app-dev.ejemplo.me/v1/menu/detail?id=${formattedId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookies?.token}`,
      },
    }
  );
  return await res.json();
};
