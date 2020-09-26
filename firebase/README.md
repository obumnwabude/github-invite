# GitHub Organisation Invitation - Firebase Version

A web app that can accept a GitHub username and send them an invitation to join a GitHub Organisation.

You can deploy it with firebase and provide users with the frontend, in which they can enter their GitHub username and get invited to your GitHub organization.

## On Firebase
Firebase is a backend as a service from Google that combines authentication, database, file storage, machine learning, analytics and cloud functions in one place, so that you concentrate on building the app. Checkout https://firebase.google.com for more information. 

This version of GitHub Invite uses Firebase to work. Fundamentally, the static files hosted from the [public folder](./public) makeup the frontend where users enter their `username`s get invited. The frontend submits to a cloud function that makes the invitation and responds with the proper feedback if invitation was successful or not via the URL parameters.

## Get an admin token
Only admin members of a GitHub organisation can send an invitation to other GitHub users, to join that organisation. The admin member must be authenticated before invitation can be sent. Go to settings in admin's GitHub account and get a new personal access token or use an existing token, if you already have one. Ensure that the token has at least, the admin:org (full control of orgs and teams, read and write org projects) permission (select that permission while creating or edit existing token permissions to include). Keep the token, it will be useful when setting up the Firebase Environment

## Setting Up
* Create a Firebase project at https://console.firebase.google.com. Take note of your project_id, it is globally unique across all firebase projects and can't be changed after your project is created. You can also enable Google Analytics (recommended).

* After creating your project, create a new web app, enable firebase hosting and follow the terminal/command line steps.

* Clone or Download this repo, and in the terminal/command line, be sure you are in this directory 

* Run `firebase use --add` and select your project

* Run `firebase functions:config:set org.name="ORG NAME ON GITHUB" org.token="GENERATED ADMIN TOKEN"`

* Enable billing for your firebase project, in the firebase console, inorder to use cloud functions at https://console.firebase.google.com/project/_/usage/details. In other words, switch from the free (spark) plan to the pay as you go (blaze) plan. Checkout the cloud functions pricing at https://firebase.google.com/pricing#cloud-functions

* Run `firebase deploy`, your Github-Invite is at your `<project_id>`.web.app 

## Customizing
Feel free to customize the frontend to suit your brand's guidelines. However, avoid tampering with the parts of the code that give feedback and make the app work.

## Demo

![Demo of Firebase Version of GitHub Organization Invitation](../demos/node-monolith.gif)
