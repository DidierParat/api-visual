# api-visual
Frontend code that queries an API and displays the response.

* Code: react, redux
* Unit tests: jest, enzyme
* Package manager: yarn
* JS transpiler: babel
* Build: webpack

## How to run
First, get the dependencies:
```
yarn
```
### Run unit tests
Then you can run unit tests with:
```
yarn test
```
### Manual testing
Run:
```
yarn dev
```
You will notice that there is no backend code in this repo.
Since http://editor.swagger.io provides a server when uploading an API definition,
 I use that server.
 
Open a web browser and go to http://localhost:8080/


From there you can set the URL of the API (there is a default value)
and fetch data from the API by pushing the `Try !` button.