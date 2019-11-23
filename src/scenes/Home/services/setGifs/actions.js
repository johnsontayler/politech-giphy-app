export const SET_GIF = 'SET_GIF';
export const LIKE_GIF = 'LIKE_GIF';
export const REMOVE_GIF = 'REMOVE_GIF';

export function setGif(term) {
  let weirdness = 10;
  const GIPHY_API_KEY = 'dFHHRwtfNPxLFWUitpW96f1QWdm6AceW';
  const url = `http://api.giphy.com/v1/gifs/translate?s=${term}?weirdness=${weirdness}&api_key=${GIPHY_API_KEY}`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: SET_GIF,
    payload: promise
  };
}

export function likeGif(gif) {

  return {
    type: LIKE_GIF,
    gifs: gif,
    count: 1
  };
}

export function removeGif(index) {

  return {
    type: REMOVE_GIF,
    index: index,
    count: 1
  };
}