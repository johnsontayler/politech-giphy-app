export const SET_GIF = 'SET_GIF';

export function submitTerm(value) {
  setGif(value.search);
}

export function setGif(string = "Kanye", weirdness = 10) {
  console.log(string);
  const GIPHY_API_KEY = 'dFHHRwtfNPxLFWUitpW96f1QWdm6AceW';
  const url = `http://api.giphy.com/v1/gifs/translate?s=${string}?weirdness=${weirdness}&api_key=${GIPHY_API_KEY}`
  console.log(url);
  const promise = fetch(url).then(response => response.json());

  return {
    type: SET_GIF,
    payload: promise
  };
}