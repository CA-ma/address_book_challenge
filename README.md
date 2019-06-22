# Challenge: Address Book web interface

## Deployment
https://ca-ma.github.io/address_book_challenge/  

Note: This application stores data in the local memory of the browser.  Remember to secure your personal information by clearing the local memory at the end of the demonstration. This can be accomplished one of two ways.

1. *click* on the "add/edit contacts" button in the application.
2. *click* on the "reset contacts" button.  

OR  

1. *right click* anywhere on the webpage and then *click* "inspect".
2. *click* on the "Application" tab from the new window that shows on the right.  You may have to find Application by *clicking* on the ">>" button to show additional tab options.
3. In Application, find "Local Storage", *click* on the arrow to drop down its contents, and *right click* on all items in the list and *click* "clear" for each.

## Summary
This repository contains scripts for a front-end only implementation of an Address Book application deployed on the web.  The UX/UI design uses standard features in HTML and CSS with implementations from the Semantic-UI component framework.  Application functionality, such as adding, saving, and removing contacts from the Address Book, is attained with Javascript ES6/ES2015.  The Address Book data is persistent accross browswer sessions with the utilization of 'localStorage'.  This application was tested successfully using Cucumber-JS.

## Table of Contents
1. Project Goals
2. Project Setup
3. Testing
4. Authors
5. Acknowledgements

## 1. Project Goals
The authors sought to create a simple webpage application that mimics the functionality of a hand-held Address Book.  The Address Book can store contacts that are displayed in the browser window for visual reference.  The list of contacts can be modified by adding and removing contacts, as well clearing the contacts list with a reset function.  The user interface was crafted with elegance and minimalistic aesthetics in mind.

## 2. Project Setup
The following guidelines show the packages needed to build and host the project on a local machine.

Prerequisites
---
- yarn v1.17.0 (Node package manager.)
- babel v7.0.0 (JS compiler ti implement JS ES6/es2015)
- chai v4.2.0 (Node library to configure BDD and TDD environment.)
- cucumber v5.1.0 (Testing suite.)
- puppeteer v1.17.0 (Node library for API interface.  In this project we use it for testing.)
- superstatic v6.0.4 (To run a local server.)
- webpack v4.34.0
- webpack-cli v3.3.4

The installation of the above packages can be finicky and time consuming.  If you are familiar with this framework, you can probably piece together the installation procedure yourself with reference to the ```package.json``` and ```.gitignore``` files.  If you are not, I highly recommend reviewing the repository files for reference and testing the application as a user on the front end.

## 3. Testing
To test this application from a user perspective, one simply needs to visit the webpage [listed previously](https://ca-ma.github.io/address_book_challenge/). 

Selecting the "add/edit contacts" button will cause a web form to appear.  At the top of the form are input fields to specify the information for a new contact to be added to the list.  At the bottom of the form are a collection of actions the user can take, including add contact, remove contact, reset the contacts list, and hide the menu without taking any actions that would modify the contacts list.  With each action, the contacts list will update itself accordingly.

Some notable Javascript features include the creation of temporary HTML objects that represent each contact, the contact data is stored in a single key/value entry in the window.localStorage, and contacts list editing requires manipulation of the HTML contact objects as well as the hash stored in localStorage.  Each section has general comments to explain its purpose.

## 4. Authors
[Aubain, Max](https://maxaubain.github.io) - [Github](https://github.com/CA-ma)  
Brás, Pedro - [Github](https://github.com/pedrocbras)

## 5. Acknowledgements
Thank you to Craft Academy in Stockholm, Sweden for crafting this challenge.