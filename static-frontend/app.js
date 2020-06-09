// get the DOM objects
const inviteForm = document.querySelector('#invite');
const inputOrg = document.querySelector('#org');
const inputToken = document.querySelector('#token');
const inputUsername = document.querySelector('#username');
const submitButton = document.querySelector('button[type="submit"]');
const messageContainer = document.querySelector('#message-container');
const messageHeading = document.querySelector('#message-heading');
const messageBody = document.querySelector('#message-body');
const host = 'https://api.github.com';

/** 
 * Removes the feedback message from the DOM and makes the submit button clickable.
 */
const reInvite = () => {
  if (!(messageContainer.classList.contains('hide'))) messageContainer.classList.add('hide');
  if (submitButton.disabled) submitButton.disabled = false;
};

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
const addToDom = (data) => {
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
const invite = async (invitation) => {
  try {
    // check if github account exists with the given username, if no return that the username is invalid
    const user = await fetch(`${host}/users/${invitation.username}`)
      .then((response) => response.json());

    if (!user.id) {
      return {
        status: false,
        message: 'Invalid Username',
        body: `GitHub user with username: ${invitation.username} not found. Please check username's spelling and try again. Thank you.`,
      };
    };

    // ensure that GitHub organization exists else return 
    const organization = await fetch(`${host}/orgs/${invitation.org}`)
      .then((response) => response.json());

    if (!organization.id) {
      return {
        status: false,
        message: 'Invalid Organization',
        body: `GitHub organization with name: ${invitation.org} not found. Please check organization's name and try again. Thank you.`,
      };
    };

    // invite user 
    return fetch(`${host}/orgs/${invitation.org}/invitations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `token ${invitation.token}`,
      },
      body: `{"invitee_id":${user.id}}`
      }).then((response) => {
        // respond apprioprately
        if (response.status == 201) {
          return {
            status: true,
            message: 'Successfully Invited',
            body: `Github user ${invitation.username} has been successfully invited to ${invitation.org} organisation.`
          };
        } else {
          return response.json().then(data => {
            let messages = [data.message];
            if (data.errors) {
              for (let error of data.errors) {
                messages.push(error.message);
              }
            }
            return {
              status: false,
              message: response.statusText,
              body: messages.join('<br>'),
            };
          });
        }
    });
  } catch (error) {
    return {
      status: false,
      message: 'An Error Occured',
      body: error.toString(),
    }; 
  }
};

// ensures that the messageContainer is hidden when data is being entered
inputOrg.addEventListener('focus', reInvite);
inputToken.addEventListener('focus', reInvite);
inputUsername.addEventListener('focus', reInvite);

// capture submit events and send
inviteForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitButton.disabled = true;
  // make invitation
  const data = await invite(Object.fromEntries(new FormData(inviteForm)));
  // update DOM depending on invitation status
  displayMessage(data);
});