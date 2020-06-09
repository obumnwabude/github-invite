# GitHub Organisation Invitation - Monolith Server Version

A web app that can accept a GitHub username and send them an invitation to join a GitHub Organisation.

## Add org.js file
Add an org.js file in the root of this repository for this app to work. The file should export the name of the GitHub organisation to be joined and an OAuth access token.

Only admin members of a GitHub organisation can send an invitation to other GitHub users, to join that organisation.
The admin member must be authenticated before invitation can be sent. Go to settings in admin's GitHub account and get a new OAuth access token or use an existing token, if you already have one. Create a file in the root of this repository and name it `org.js`.
Export an object containing the name of the organisation to joined and your OAuth token.

Example: in `org.js` 
```
module.exports = {
  name: <NAME OF ORGANISATION ON GITHUB>,
  token: <OAUTH ACCESS TOKEN OF AN ADMIN IN THAT ORGANISATION>
};
```

`org.js` has been added to .gitignore so that credentials are not committed to Git.

## The FrontEnd
In the home of your app, a GitHub user can enter their `username` and get invited to your organization. They will receive proper feedback, whether they was successfully invited or not and possible reasons for that.
