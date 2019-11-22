export const SET_GIF = 'SET_GIF';

export function submitTerm(value) {
  setGif(value.search)
}

export function setGif(value = "Hamburger") {
  let string = value
  console.log(string);
  let weirdness = 0;
  const GIPHY_API_KEY = 'dFHHRwtfNPxLFWUitpW96f1QWdm6AceW';
  const url = `http://api.giphy.com/v1/gifs/translate?s=${string}?weirdness=${weirdness}&api_key=${GIPHY_API_KEY}&limit=1`

  const promise = fetch(url).then(response => response.json());

  return {
    type: SET_GIF,
    payload: promise
  }
}