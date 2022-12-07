export function renderWelcomeScreen(element) {
  const welcomeScreenMarkup = `
    <form id="welcome-form">
      <label for="floors">Enter Floors:</label>
      <input name="floors" id="floors" type="number" required>

      <label for="lifts">Enter Lifts:</label>
      <input name="lifts" id="lifts" type="number" required>

      <button class="welcome-button" type="submit" >Start</button>
    </form>
  `
  element.innerHTML = welcomeScreenMarkup;
}

export const getFormValue = () => {
  const floors = document.querySelector('#floors').value;
  const lifts = document.querySelector('#lifts').value;
  return { floors, lifts };
}