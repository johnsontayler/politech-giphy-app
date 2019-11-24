export const SET_GIF = 'SET_GIF';
export const LIKE_GIF = 'LIKE_GIF';
export const UNLIKE_GIF = 'UNLIKE_GIF';

let term = "";
let weirdness = 0;

export function setGif(query) {
  typeof query === "string" ? (term = query) : "";
  typeof query === "number" ? (weirdness = query) : "";

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
    gifLiked: gif,
    count: 1
  };
}

export function unlikeGif(index) {
  return {
    type: UNLIKE_GIF,
    index: index,
    count: 1
  };
}
