export const getData = async (url: string) => {
  const response = await fetch(url);
  console.log("response", response);
  if (!response.ok) {
    return null;
  }
  return await response.json();
};
