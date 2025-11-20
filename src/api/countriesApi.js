export const BASE_URL =
  "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population,languages,borders,maps,unMember,cca3";

export async function fetchCountries() {
  const response = await fetch(BASE_URL);
  return response.json();
}