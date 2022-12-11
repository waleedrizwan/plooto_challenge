# Plooto Challenge
![workflow](https://github.com/waleedrizwan/plooto_challenge/actions/workflows/node.js.yml/badge.svg)

### About
- Structured to run in same repo as source code 
- cypress/e2e contains all test files
- .github/workflows contains the yml file that describes the testing workflow
- All tests are written based on specified functionality 
- Tests for each page are contained in the file with the page name
- Tests are run automatically at the end of every day, and on each pull/push request 

### To run tests on local machine 

1. [Install Node on system](https://nodejs.org/en/download/)
2. clone repo
3. run "npm install"
4. run "npm test" (results displayed in terminal)

### Notes
- Valid user log-in credentials not given to test user authentication
- React components state not given 
- Sign in button performs no auth, auto redirects to company selection page
- Client List search feature on company select page does not function 
- Users can access all pages without logging in
- Refreshing any page does not redirect user to log in screen