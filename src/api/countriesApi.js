import countries from '../data/countries.json'
export const BASE_URL =
  "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population,languages,borders,maps,unMember,cca3";

export async function fetchCountries() {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => resolve(countries), 500);
  // });
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}