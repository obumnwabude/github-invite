# GitHub Organisation Invitation - NPM package

A package that takes a GitHub organization's name, a personal access token of an admin user in that organization, and a GitHub username. It then sends an invitation to the GitHub user with the provided name, with the help of the provided token, to join the provided GitHub Organisation. The token must have at least, the admin:org (Full control of orgs and teams, read and write org projects) permission when the token was created.

## Usage:

* #### Install the package

In the command line, run

```
npm i -g github-invite
```

* #### Make an invitation

```
github-invite
```

The CLI will demand for the `org`, `username` and admin's `token`

You can still enter all three details at once.

```
github-invite <org> <username> <token>
```


## Demo 

![Demo of NPM Package Version of GitHub Organization Invitation](../demos/npm-package.gif)