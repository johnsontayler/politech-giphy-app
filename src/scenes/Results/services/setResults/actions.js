export const TOGGLE_CONFETTI = 'TOGGLE_CONFETTI';

export function toggleConfetti() {
  const gifConfetti = document.getElementById('gifConfetti');

  return {
    type: TOGGLE_CONFETTI,
    gifConfetti: gifConfetti
  };
}
