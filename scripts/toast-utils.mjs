/**
 * Show toasts show a toast message on bottom of screen
 * @param {string} message Message to show in toast
 */
export const showToast = (message) => {
  const toast = document.getElementById('toast');
  toast.textContent = `⚠️ ${message}`;
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 2500);
}
