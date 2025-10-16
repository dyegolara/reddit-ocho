export const getData = async (url: string) => {
  // Use CORS proxy to bypass Reddit's IP blocking of hosting providers
  const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;

  const response = await fetch(proxyUrl);
  console.log({ response });
  if (!response.ok) {
    return null;
  }
  return await response.json();
};
