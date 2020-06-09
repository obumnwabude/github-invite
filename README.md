# GitHub Organisation Invitation

A web app that can send invitations to GitHub users to join a given GitHub organization. The app uses a valid OAuth access token of an admin user in that GitHub organization to send invitations. 

To send an invitation three things must be provided: 
1. Name of the GitHub organization.
2. OAuth Access token of an admin in that organization (obtainable in GitHub account settings).
3. Username of the GitHub user to be invited.

The way this app requires the provision of the above mentioned three items, depend on your choice of version to use. Two versions are available and they require different ways of providing the above three items.

1. ## [Node Monolith Server](/node-monolith)
In this version, provide an `org.js` file in the root folder that exports a JSON object containing `name` (organization's name) and `token` properties. Host the node server. In its frontend, a GitHub user can enter their `username` and get invited to your organization. They will receive proper feedback, whether they was successfully invited or not and possible reasons for that.

2. ## [Static Web App](/static-frontend)
In this version, you enter your organization's name on GitHub, an admin's OAuth access token and the username of the GitHub user to be invited, directly in the static frontend of the website and JavaScript will do the invitation. Proper feedback is equally shown directly in the website whether the invitation was successful or not and possible reasons for that.