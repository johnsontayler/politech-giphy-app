export const CHANGE_WEIRDNESS = 'CHANGE_WEIRDNESS';
export const SET_WEIRDNESS = 'SET_WEIRDNESS';
export const ADD_SCORE = 'ADD_SCORE';
export const SUBTRACT_SCORE = 'SUBTRACT_SCORE';
export const CALCULATE_SCORE = 'CALCULATE_SCORE';
export const RESET_WEIRDNESS_RESULT = 'RESET_WEIRDNESS_RESULT';

let weirdnessNum = 0;

export function changeWeirdness(event) {
  const weirdnessSlider = document.getElementById('weirdnessSlider');
  const thumb = weirdnessSlider.querySelector('.thumb');
  const shiftX = event.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - weirdnessSlider.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    const rightEdge = weirdnessSlider.offsetWidth - thumb.offsetWidth;
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

export function addScore(gifWeirdness) {
  return {
    type: ADD_SCORE,
    gifWeirdness: gifWeirdness
  };
}

export function subtractScore(gifIndex) {
  return {
    type: SUBTRACT_SCORE,
    index: gifIndex
  };
}

export function calculateScore() {
  return {
    type: CALCULATE_SCORE
  };
}

export function resetWeirdnessResult() {
  return {
    type: RESET_WEIRDNESS_RESULT,
  };
}
