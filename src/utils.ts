export const getData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    return null;
  }
  console.log("response", response);
  return await response.json();
};
