// get the DOM objects
const inviteForm = document.querySelector('#invite');
const inputUsername = document.querySelector("input[type='text']");
const submitButton = document.querySelector("button[type='submit']");
const messageContainer = document.querySelector('#message-container');
const messageHeading = document.querySelector('#message-heading');
const messageBody = document.querySelector('#message-body');
const org = document.querySelector('.org');

// get organisation's name
fetch('/org')
  .then((response) => response.text())
  .then((name) => {
    if (name !== '') {
      org.innerHTML = '@' + name;
      org.classList.add('org-name');
    }
  })
  .catch((error) => console.log(error));

// ensures that the messageContainer when a username is being entered
inputUsername.addEventListener('focus', () => {
  if (!messageContainer.classList.contains('hide'))
    messageContainer.classList.add('hide');
  if (submitButton.disabled) submitButton.disabled = false;
});

// capture submit events and send
inviteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // make the click button unavailable
  submitButton.disabled = true;
  // send username and handle accordingly
  fetch('/invite', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(new FormData(inviteForm))),
  })
    .then((response) => response.json())
    .then((data) => displayMessage(data))
    .catch((error) => {
      displayMessage({
        status: false,
        message: 'An Error Occured',
        body: error,
      })}
    );
});

/**
 * Adds the response message to the DOM
 * @param {Object} data - the data from which the message to be added to the DOM is configured
 */
const displayMessage = (data) => {
  // if invitation was successfully sent
  if (data.status) {
    // set the color of header
    messageHeading.classList.remove('failure');
    messageHeading.classList.add('success');
    // update the DOM
    addToDom(data);
  } else {
    // else if invitation was not successfully sent
    // set the color of header
    messageHeading.classList.remove('success');
    messageHeading.classList.add('failure');
    // update the DOM
    addToDom(data);
  }
  // make the click button available
  submitButton.disabled = false;
};

/**
 * Adds the provided message and body to the DOM and expose them
 * @param {Object} data - the data to be added to the DOM
 */
const addToDom = (data) => {
  messageHeading.innerHTML = data.message;
  messageBody.innerHTML = data.body;
  messageContainer.classList.remove('hide');
};
