export const getData = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "reddit-ocho-app/1.0",
      Accept: "application/json",
    },
    cache: "no-store",
  });
  console.log({ response });
  if (!response.ok) {
    return null;
  }
  return await response.json();
};
