const chalk = require('chalk');

const cyan = (text) => chalk.cyan.bold(text);

module.exports = () => {
  const help = `
Invites a GitHub user with the provided username to the provided GitHub organization. The personal access token of an admin in that GitHub organization is required and it is with it that the invitation is done.

Usage: github-invite
       github-invite <org>
       github-invite <org> <username> <token>
       github-invite <options>

Use without arguments or with incomplete arguments for an interactive invitation. Using without arguments is preferrable because token input is hidden.

  ${cyan(
    'org'
  )}          The name of an organization in GitHub into which a user
               is to be invited.

  ${cyan(
    'username'
  )}     The username of the GitHub user to be invited to the provided
               organization.

  ${cyan(
    'token'
  )}        A personal access token of an admin member in the organization.
               The token must at least have the write:org permission under
               admin:org permissions when the token was created in GitHub 
               account settings of the admin.

Options:

  ${cyan('help')}, ${cyan('--help')}, or ${cyan(
    '-h'
  )}:          Displays this help information.

  ${cyan('version')}, ${cyan('--version')}, or ${cyan(
    '-v'
  )}:    Displays the current version of github-invite.
  `;

  console.log(help);
  process.exit(0);
};
