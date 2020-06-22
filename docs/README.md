# GitHub Organization Invitation - Static Frontend Version

A website that can accepts a GitHub organization's name, an admin's personal access token, and the username of a GitHub user, and sends an invitation to the GitHub user to join the GitHub Organization.

You can host the static files or open `index.html` directly, and then you can enter the necessary details and invite users.

In a Github organization, only admin members can send an invitation to other GitHub users, to join that organization. The admin member must be authenticated before invitation can be sent. Go to settings in admin's GitHub account and get a new personal access token or use an existing token, if you already have one. The token must have at least, admin:org (full control of orgs and teams, read and write org projects) permission, when the token was created. 

## Usage

To invite a user, enter the organization's name on GitHub, the personal access token and the GitHub username of the user to be invited and invite the user. The website gives feedback telling whether invitation was successful or not and possible reasons why the invitation was not successful.


## Demo 

![Demo of Static Frontend Version of GitHub Organization Invitation](../demos/static-frontend.gif)