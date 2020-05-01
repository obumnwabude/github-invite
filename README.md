# GitHub Organisation Invitation

A web app that can accept a GitHub username and send them an invitation to join a GitHub Organisation.

#### org.js
Only admin members of a GitHub organisation can send an invitation to other GitHub users, to join that organisation.
The admin member must be authenticated before invitation can be sent.
Go to settings in GitHub account and get a new OAuth access token or use an existing token, if you already have one.
Create a file in the root of this repository and name it `org.js`.
Export an object containing the name of the organisation to joined and your OAuth token.

Example: in `org.js` 
```
module.exports = {
  name: <NAME OF ORGANISATION ON GITHUB>,
  token: <OAUTH ACCESS TOKEN OF AN ADMIN IN THAT ORGANISATION>
};
```

`org.js` has been added to .gitignore so that credentials are not committed to Git.