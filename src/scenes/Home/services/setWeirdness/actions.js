export const CHANGE_WEIRDNESS = 'CHANGE_WEIRDNESS';
export const SET_WEIRDNESS = 'SET_WEIRDNESS';
export const ADD_WEIRDNESS = 'ADD_WEIRDNESS';

let weirdnessNum = 0;

export function changeWeirdness(event) {
  const weirdnessSlider = document.getElementById('weirdnessSlider');
  let thumb = weirdnessSlider.querySelector('.thumb');
  let shiftX = event.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - weirdnessSlider.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = weirdnessSlider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = newLeft + 'px';
    weirdnessNum = Math.round(newLeft / 60);
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

  return {
    type: CHANGE_WEIRDNESS
  };
}

export function setWeirdness() {

  return {
    type: SET_WEIRDNESS,
    number: weirdnessNum
  };
}

export function addWeirdness(gifWeirdness) {

  return {
    type: ADD_WEIRDNESS,
    gifWeirdness: gifWeirdness
  };
}