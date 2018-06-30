/**
 * Attaches the ui events
 * @param {(n: number) => number} transformer Takes a number and gives back a transformed number
 */
const initUI = (transformer) => {
  const input = document.getElementById('number');
  const button = document.getElementById('calculate');

  button.addEventListener('click', async () => {
    const number = parseInt(input.value) || 0;
    if (!number) {
      const { showToast } = await import('./toast-utils.mjs');
      return showToast('Please enter a value');
    }
    input.value = transformer(number);
  });
}

export default initUI;
