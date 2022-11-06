export const image_base_url = "https://image.tmdb.org/t/p/original/";

export function randomResultForArray(arrayData) {
  return arrayData[Math.floor(Math.random() * arrayData.length)];
}

export function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
