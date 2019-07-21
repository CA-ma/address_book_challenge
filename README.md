# Challenge: Address Book web interface
Developed by,
* Aubain, Max - [Github](https://github.com/CA-ma)  
* Brás, Pedro - [Github](https://github.com/pedrocbras)

Documented by,
* Aubain, Max

## Summary
This repository contains scripts for a front-end implementation of an Address Book application deployed on the web.  The UX/UI design uses stylizing features from the [Semantic-UI](https://semantic-ui.com/) component framework.  Application functionality, such as adding, saving, and removing contacts from the Address Book, is attained with Javascript.  The Address Book data is persistent accross browswer sessions with the utilization of the native JS method `window.localStorage`.  This application implements feature testing using [Cucumber](https://cucumber.io/).

**Front end**
  * HTML
  * CSS, Semantic-UI
  * Javascript ES6/ES2015

**Back end**
  * N/A

**Testing**
  * Cucumber-JS: feature

## Deployment
The [Address Book web app](https://ca-ma.github.io/address_book_challenge/) is deployed using Github Pages.

**Security Note**:
This application stores data in the local memory of the browser.  Remember to secure your personal information by clearing the local memory at the end of the demonstration. This can be accomplished one of two ways.

*click* on the `add/edit contacts` button in the application, and then *click* on the `reset contacts` button.  

OR  

*right click* anywhere on the webpage and then *click* `inspect`.  Next, *click* on the `Application` tab from the new window that shows on the right.  You may have to find `Application` by *clicking* on the `>>` button to show additional tab options.  Finally, in `Application`, find `Local Storage`, *click* on the arrow to drop down its contents, and *right click* on all items in the list and *click* `clear` for each.

## Building The Project 
### Goals
The authors sought to create a simple webpage application that mimics the functionality of a pencil-and-paper address book.  In modern terms, it is a contacts list app.  The Address Book can store contacts that are displayed in the browser window for visual reference.  The list of contacts can be modified by adding and removing contacts, as well clearing the contacts list with a reset function.  The user interface was crafted with simplicity and minimalistic aesthetics in mind.

### Local Setup
To locally run or test this application, fork this repository to your github account and clone to a local workspace.  The following instructions will configure your local workspace with the necessary package manager and packages.

```
$ yarn init                                                   // Installs package manager
$ yarn add cucumber chai puppeteer superstatic --dev          // Installs Cucumber testing suite configured with chai, puppeteer, super static

```

You will be able to use the following command to run the Cucumber testing suite.
```
$ yarn run cucumber
```

Modifying the `app.js` file will require a re-compiling of the code in the ES2015 format.  This is accomplished with the Webpack package and Babel.  To install, run the following command.
```
$ yarn add webpack webpack-cli babel-loader babel-preset-es2015 babel-polyfill babel-register --dev
```

And to update the build, run the following command.
```
$ yarn run build
```

### Testing
Of course, the application can be tested manually using the user interface.  Selecting the "add/edit contacts" button will cause a web form to appear.  The input fields specify the information for a new contact to be added to the list.  At the bottom of the form are a collection of actions the user can take, including `add` contact, `remove` contact, `reset` the contacts list, and `hide` the menu.  With each action, the contacts list will update itself accordingly.

Using the Cucumber package, feature testing can be accomplished.  Cucumber is a useful tool to enable Behavior Driven Design (BDD) elements with the rigor of Test Driven Development (TDD).  User stories were drafted to guide the feature testing process.

```
"As a user,
In order to stay in touch with my friends,
I would like to be able to create a contact for them in my address book."
```

The full feature test can be inspected in the `/features/main.feature` file.  It is straight forward to review as the Cucumber testing language, [Gherkin](https://cucumber.io/docs/gherkin/reference/), mimics natural language syntax and is straight forward to read.  The Javascript step definitions that translate the Cucumber test requirements to JS methods, and supporting JS methods for those step definitions, are contained in the `/features/step_definitions/basic-steps.js` and `/features/support/world.js` files.

Finally, the application code is contained in the `/src/app.js` file.  It is lightly commented for reviewers to easily locate and identify key methods that enable the functionality of the app.

## Acknowledgements
Thank you to Craft Academy in Stockholm, Sweden for crafting this challenge.