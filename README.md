# GitHub Organisation Invitation

A web app that can send invitations to GitHub users to join a given GitHub organization. The app uses a valid personal access token of an admin user in that GitHub organization to send invitations. 

To send an invitation three things must be provided: 
1. Name of the GitHub organization.
2. Personal access token of an admin in that organization (obtainable in GitHub account settings) that has at least, admin:org (full control of orgs and teams, read and write org projects) permission, when the token was created.
3. Username of the GitHub user to be invited.

The way this app requires the provision of the above mentioned three items, depend on your choice of version to use. Two versions are available and they require different ways of providing the above three items.

1. ## [Node Monolith Server](/node-monolith)
In this version, provide an `org.js` file in the root folder that exports a JSON object containing `name` (organization's name) and `token` properties. Host the node server. In its frontend, a GitHub user can enter their `username` and get invited to your organization. They will receive proper feedback, whether they was successfully invited or not and possible reasons for that.

2. ## [Static Web App](/static-frontend)
In this version, you enter your organization's name on GitHub, an admin's personal access token and the username of the GitHub user to be invited, directly in the static frontend of the website and JavaScript will do the invitation. Proper feedback is equally shown directly in the website whether the invitation was successful or not and possible reasons for that.

3. ## [NPM Package](/npm-package)
In this version, you install `github-invite` CLI with through [npm/NodeJS](https://nodejs.org), and then you use the CLI to send invitations directly from the command line. You can choose to either enter the `org`, `username` and `token` all at once with `github-invite`, that is:
```
github-invite <org> <username> <token>
```
**OR**
You can type `github-invite` just once in the command line and it will interactively demand for the above three details. The `github-invite` CLI also outputs feedback properly as invitations are done, and whether invitations were successful or not, and possible reasons for that.