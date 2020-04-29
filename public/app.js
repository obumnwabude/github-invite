// get the form
const inviteForm = document.querySelector('#invite');

// get the submit button
const submitButton = document.querySelector("button[type='submit']");

/** 
 * Changes the state of the submit button
 */
const switchButton = () => submitButton.disabled ? submitButton.disabled = false :
  submitButton.disabled = true;

// capture submit events and send
inviteForm.addEventListener('submit', e => {
  e.preventDefault();
  switchButton();
  fetch('/', { 
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify(Object.fromEntries(new FormData(inviteForm)))})
    .then(response => response.json())
    .then(data => success(data))
    .catch(error => failure(error));
});

/**
 * Handles successful submission of username
 * @param {string} response - The response from successful submission
 */
const success = data => {
  switchButton();
  console.log(data);
};

/** 
 * Handles error submission of username
 * @param {error} error - The error that occured upon submission
 */
const failure = error => {
  switchButton();
  console.log(error);
};