export const getData = async (url: string) => {
  // Use old.reddit.com instead of www.reddit.com as it's less strict with blocking
  const fetchUrl = url.replace("www.reddit.com", "old.reddit.com");

  const response = await fetch(fetchUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
      Accept: "application/json",
    },
  });
  console.log({ response, url: fetchUrl });
  if (!response.ok) {
    console.log({ status: response.status, statusText: response.statusText });
    return null;
  }
  return await response.json();
};
