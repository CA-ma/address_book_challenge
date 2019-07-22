# Front End Application: Address Book
Developed by,
* Aubain, Max - [Github](https://github.com/CA-ma)  
* Brás, Pedro - [Github](https://github.com/pedrocbras)

Documented by,
* Aubain, Max

## Summary

**Front end**: HTML; CSS, Semantic - US; and JS ES6/ES2015.<br>
**Back end**: N/A.<br>
**Testing**: Cucumber - feature test.

This repository contains a code base for a front end implementation of an Address Book application for deployment on the web.  The UX/UI design uses stylizing features from the [Semantic-UI](https://semantic-ui.com/) component framework.  Application functionality, such as adding, saving, and removing contacts from the Address Book, is implemented with Javascript.  The Address Book data is persistent accross browswer sessions with the utilization of the native JS method `window.localStorage`.  This application implements feature testing using [Cucumber](https://cucumber.io/).

The authors sought to create a simple webpage application that mimics the functionality of a pencil-and-paper address book.  In modern terms, it is a contacts list app.  The Address Book can store contacts that are displayed in the browser window for visual reference.  The list of contacts can be modified by adding and removing contacts, as well clearing the contacts list with a reset function.  The user interface was crafted with simplicity and minimalistic aesthetics in mind.

## Deployment
The [Address Book web app](https://ca-ma.github.io/address_book_challenge/) is deployed using Github Pages.

**Security Note**:
This application stores data in the local memory of the browser.  Remember to secure your personal information by clearing the local memory at the end of the demonstration. This can be accomplished one of two ways.

*click* on the `add/edit contacts` button in the application, and then *click* on the `reset contacts` button.  

OR  

*right click* anywhere on the webpage and then *click* `inspect`.  Next, *click* on the `Application` tab from the new window that shows on the right.  You may have to find `Application` by *clicking* on the `>>` button to show additional tab options.  Finally, in `Application`, find `Local Storage`, *click* on the arrow to drop down its contents, and *right click* on all items in the list and *click* `clear` for each.

## Building, Development, and Testing
To locally run or test this application, fork this repository to your github account and clone the repository containing the forked project to a local workspace.  The following instructions will configure your local workspace with the necessary package manager and packages for building and testing the application.

```
// Install package manager

$ yarn init     

// Install Cucumber testing suite configured with chai, puppeteer, super static

$ yarn add cucumber chai puppeteer superstatic --dev          

// Run feature tests

$ yarn run cucumber
```

Modifying the [`app.js`](/src/app.js) file will require a re-compiling of the code in the ES2015 format stored in [`/dist/bundle.js`](/dist/bundle.js).  This is accomplished using the [Webpack bundler](https://webpack.js.org/) and [Babel compiler](https://babeljs.io/).
```
// Install Webpack

$ yarn add webpack webpack-cli babel-loader babel-preset-es2015 babel-polyfill babel-register --dev

// Rebuild app.js

$ yarn run build
```

The application can be inpsected in the view.  

**Application view after contact is added**<br>
![contact added](/src/img/contact_added.png) 

Selecting the `Add/Edit Contacts` button will cause a form to appear.  The input fields specify the information that will be added to a new contact.  At the bottom of the form are a collection of actions the user can take, including `Save Contact` with the current information in the form, `Delete` an already saved contact identified by contact number, `Reset Contacts` which clears `window.localStorage` of all contact information, and `Hide` the menu.  With each action, the contacts list will update itself accordingly in the memory and then render the updated contacts list.

**Application view with contact form**<br>
![contact added](/src/img/contact_form.png) 

The source code is contained in [`app.js`](/src/app.js).  It contains comments that describe key methods which enable the app functionality.  Notably, the function that store information in `window.localStorage`, that `renderContacts()`, and that delete a selected contact from `window.localStorage` drive most of the app.

Feature testing is accomplished using Cucumber, which enables Behavior Driven Design (BDD) processes with the rigor of Test Driven Development (TDD) in one's coding flow.  User stories were drafted to guide the development of scenarios in the feature testing process.  Two scenarios, located in [`/features/main.feature`](/features/main.feature) were derived from the following user story.

```
"As a user,
In order to stay in touch with my friends,
I would like to be able to create a contact for them in my address book."
```

The scenarios of the feature test are straight forward to review as the Cucumber testing language, [Gherkin](https://cucumber.io/docs/gherkin/reference/), mimics natural language syntax and is easy to read.  The feature test confirms that first one contact can be saved, and then another for a total of two saved contacts.  The Javascript step definitions in [`/features/step_definitions/basic-steps.js`](/features/step_definitions/basic-steps.js) translate the Cucumber test requirements to JS methods. such as 'click on button' or 'fill in form field'.   The step definitions are further defined by JS methods contained in [`/features/support/world.js`](/features/support/world.js) that execute the intended test step.

## Acknowledgements
Thank you to [Craft Academy](https://craftacademy.se/) in Stockholm, Sweden for crafting this challenge.