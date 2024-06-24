export async function getProfiles(url: string) {
  const data = await fetch(url)
    .then((res) => res.json())
    .catch((error) => console.error(error));

  return data;
}
