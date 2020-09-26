# GitHub Organisation Invitation

A web app that can send invitations to GitHub users to join a given GitHub organization. The app uses a valid personal access token of an admin user in that GitHub organization to send invitations. 

To send an invitation three things must be provided: 
1. Name of the GitHub organization.
2. Personal access token of an admin in that organization (obtainable in GitHub account settings) that has at least, admin:org (full control of orgs and teams, read and write org projects) permission, when the token was created.
3. Username of the GitHub user to be invited.

The way this app requires the above mentioned three items, depends on your choice of version to use. Four versions are available and they require different ways of providing the above three items.



1. ## [Node Monolith Server](/node-monolith)

In this version, provide an `org.js` file in the root folder that exports a JSON object containing `name` (organization's name) and `token` properties. Host the node server. In its frontend, a GitHub user can enter their `username` and get invited to your organization. They will receive proper feedback, whether they was successfully invited or not and possible reasons for that.

#### Demo

![Demo of Node Monolith Version of GitHub Organization Invitation](/demos/node-monolith.gif)

2. ## [Firebase Version](/firebase) 

In this version, create a firebase project at https://console.firebase.google.com and set it up and deploy as in the [Firebase Version README](/firebase/README.md#setting-up). Your Github-Invite is at your `<project_id>`.web.app. Share this link with your invitees. It contains a frontend similar to that of the Node Monolith above, where the GitHub user can enter their username and get invited to your organization.

#### Demo

![Demo of Node Monolith Version of GitHub Organization Invitation](/demos/node-monolith.gif)


3. ## [Static Web App](/docs)

In this version, you enter your organization's name on GitHub, an admin's personal access token and the username of the GitHub user to be invited, directly in the static frontend of the website and JavaScript will do the invitation. Proper feedback is equally shown directly in the website whether the invitation was successful or not and possible reasons for that.

It is hosted with [GitHub pages](https://pages.github.com) at https://obumnwabude.github.io/github-invite/
So, you can click on that link and perform as many invitations as you wish.

#### Demo

![Demo of Static Frontend Version of GitHub Organization Invitation](/demos/static-frontend.gif)


4. ## [NPM Package](/npm-package)

[![npm version](https://badge.fury.io/js/github-invite.svg)](https://badge.fury.io/js/github-invite)

In this version, you install `github-invite` CLI with through [npm/NodeJS](https://nodejs.org), and then you use the CLI to send invitations directly from the command line. You can then choose to either enter `github-invite`, and then the CLI will interactively demand the `org`, `username` and `token`, that is:

```
github-invite
```

**OR**

You can enter all three arguments at once with the `github-invite` command as follows:
```
github-invite <org> <username> <token>
```

The `github-invite` CLI also outputs feedback properly as invitations are done, and whether invitations were successful or not, and possible reasons for that.

#### Demo 

![Demo of NPM Package Version of GitHub Organization Invitation](/demos/npm-package.gif)

<br/>
<br/>
<br/>

## Customizing
Feel free to customize the frontends of the ![Node Monolith](/node-monolith) and ![Firebase](/firebase) versions to suit your brand's guidelines. However, avoid tampering with the parts of the code that give feedback and make the app work.

## Bugs? Features?
If you have find any problems while using this software, or you come accross any bugs, or you want to add a feature, please feel free to create an issue or pull request. 
Thank you!
