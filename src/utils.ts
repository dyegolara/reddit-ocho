export const getData = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "reddit-ocho-app/1.0",
      Accept: "application/json",
    },
  });
  console.log({ response });
  if (!response.ok) {
    return null;
  }
  return await response.json();
};
