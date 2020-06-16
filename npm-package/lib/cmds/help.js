const chalk = require('chalk');

const blue = (text) => chalk.blueBright.bold(text);

module.exports = (() => {
  const help = `Invites a GitHub user with the provided username to the provided GitHub organization. The personal access token of an admin in that GitHub organization is required and it is with it that the invitation is done.

Usage: github-invite <org> <token> <username>
       github-invite [options]

  ${blue('org')}          The name of an organization in GitHub into which a user
               is to be invited.
  ${blue('token')}        A personal access token of an admin member in the organization.
               The token must at least have the write:org permission under
               admin:org permissions when the token was created in GitHub 
               account settings of the admin.
  ${blue('username')}     The username of the GitHub user to be invited to the provided
               organization.

Options:
  help, --help, or -h:          Displays this help information.
  version, --version, or -v:    Displays the current version of github-invite.
  `;

  console.log(help);
  process.exit(0);
})();