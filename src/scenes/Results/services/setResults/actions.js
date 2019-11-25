export const REMOVE_CONFETTI = 'REMOVE_CONFETTI';

export function removeConfetti() {
  const gifConfetti = document.getElementById('gifConfetti');
  const confettiDisplay = gifConfetti.style.display

  return {
    type: REMOVE_CONFETTI,
    confettiDisplay: confettiDisplay
  };
}
