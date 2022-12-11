# Plooto Challenge
![workflow](https://github.com/waleedrizwan/plooto_challenge/actions/workflows/node.js.yml/badge.svg)

### About
- cypress/e2e contains all test files
- .github/workflows contains the yml file that describes the testing workflow
- All tests are written based on specified functionality 
- Tests for each page are contained in the file with the page name
- Tests are run automatically at the end of every day, and on each pull/push request 

### To run tests on local machine 

1. [Install Node on system](https://nodejs.org/en/download/)
2. clone repo
3. run "npm install"
4. run "npm test"

### Notes
- valid log in credentials not given
- Users can log in without a username or password, and any user name and password works
- Search feature on company select page on client list does not function 
- Users can access all pages without logging in
- Refreshing any page does not redirect user to log in screen




