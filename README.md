# Age Calculator

This is an Epicodus friday project for Javascript that focuses on behavior testing using jasmine and karma, separating front end and back end using npm packages and gulp, utilizing ES6 features, implementing API, and proper usage of .gitignore.

## Specs
1. A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
2. A user should be able to enter a name to receive a list of doctors in the Portland area that fit the search query.
3. If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
4. If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
5. If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.).   

## Getting Started

1. To run this application you will need to clone/download the contents of the repository and run "npm install" in the terminal,
then run "gulp build" in the terminal.
2. Please note that you must have node.js installed on your machine.
3. You would need to get your own copy of API key from this link https://developer.betterdoctor.com/.

### Prerequisites

You will need the following packages and software installed:

```
node.js

## Built With

* Atom

## Authors

* **Jun Li** - [june11084](https://github.com/june11084)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
