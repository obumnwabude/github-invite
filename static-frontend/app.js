// get the DOM objects
const inviteForm = document.querySelector('#invite');
const inputOrg = document.querySelector('input[name="org"]');
const inputToken = document.querySelector('input[name="token"]');
const inputUsername = document.querySelector('input[name="username"]');
const submitButton = document.querySelector('button[type="submit"]');
const messageContainer = document.querySelector('#message-container');
const messageHeading = document.querySelector('#message-heading');
const messageBody = document.querySelector('#message-body');

// ensures that the messageContainer is hidden when a username is being entered
inputUsername.addEventListener('focus', () => {
  if (!(messageContainer.classList.contains('hide'))) messageContainer.classList.add('hide');
  if (submitButton.disabled) submitButton.disabled = false;
});

// capture submit events and send
inviteForm.addEventListener('submit', async e => {
  e.preventDefault();
  submitButton.disabled = true;
  // make invitation
  const data = await invite(Object.fromEntries(new FormData(inviteForm)));
  // update DOM depending on invitation status
  displayMessage(data);
});

/** 
 * Adds the response message to the DOM
 * @param {Object} data - the data from which the message to be added to the DOM is configured
 */
const displayMessage = (data) => {
  if (data.status) {
    messageHeading.classList.remove('failure');
    messageHeading.classList.add('success');
    addToDom(data);
  } else {
    messageHeading.classList.remove('success');
    messageHeading.classList.add('failure');
    addToDom(data);
  }
  submitButton.disabled = false;
};

/** 
 * Adds the provided message and body to the DOM and expose them
 * @param {Object} data - the data to be added to the DOM
 */
const addToDom = data => {
  messageHeading.innerHTML = data.message;
  messageBody.innerHTML = data.body;
  messageContainer.classList.remove('hide');
};

/**
 * Invites a user to an organisation
 * @param {Object} invitation - an object containing org,
 * token and username properties which correspond to the 
 * organisation to which invitation is done, the token of 
 * an admin making the invitation and the username of the
 * invitee.
 * @return {Object} data indicating whether the invitation
 * was successful or not.
 */
const invite = invitation => {
  console.log(invitation);
  return {
    status: true,
    message: 'Successfully Invited',
    body: `Github user ${invitation.username} has been successfully invited to ${invitation.org} organisation.`
  };
};