const fetchCountry = async ({ queryKey }) => {
  const name = queryKey[1];

  const apiRes = await fetch(
    `https://restcountries.com/v2/name/${name}?fullText=true`
  );

  if (!apiRes.ok) {
    throw new Error(`details/${name} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchCountry;
