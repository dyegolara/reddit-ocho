export const getData = async (url: string) => {
  const response = await fetch(url);
  console.log("response", response);
  return await response.json();
};
