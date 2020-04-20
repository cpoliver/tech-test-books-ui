# Overview
 
First of all, I’d like to thank you for spending the time to review my code for the Million Books challenge. There are quite a lot of things that I’d like to discuss in the analysis towards the end of this document, so if you have time, please have a read through my thoughts.

![](http://i.imgur.com/jrnKwyp.png)
 
## Getting Started: Deployed Version
 
In order to save time and potential issues running the code locally, I have deployed a fully-functional version of the app to Heroku (server) and Github Pages (client).
 
https://cpoliver.github.io/tech-test-books-ui/
 
Please be aware that on the initial load, the app may have some latency because the back-end is hosted on a free Heroku dyno. However, once this has spun up, the application runs smoothly on mobile devices and desktop.
 
## Getting Started: Running Locally
 
The app is split into two repositories for the front-end and back-end. This isn’t ideal, but I found it easier to work with given I didn’t really know how much server code I’d end up writing. Ideally, everything would be under one repo with server-side rendering.
 
  - https://github.com/cpoliver/tech-test-books-ui

  - https://github.com/cpoliver/tech-test-books
 
`git clone` both of these repos, then run `yarn install` in both directories (the `npm` equivalents should work for any other `yarn` command mentioned hereon in).
 
### Versions/Dependencies
 
The code was developed on a 2016 MacBook Pro, running macOS Sierra 10.12.3 and NodeJS 8.1.0
 
The UI was tested in Chrome on Mac OS and Webkit (Chrome) on iOS 10 iPhone 7+/iPad Mini 4. More browsers may be supported but cannot be guaranteed due to time constraints.
 
### Running the Server
 
Run `yarn start` to run the pre-built sources from the `/dist` directory. These have been included to ease deployment to Heroku without having to set up any sort of CI or build pipeline. Obviously, in the real world I’d use CI with tests, code quality checks and staged deployments.
 
Unit tests can be run in either a single-run or watch mode with `yarn test` and `yarn run test:watch` respectively.
 
To run in dev mode with `babel-node` and live-reloading, use `yarn run dev`
 
__*NOTE*: The server has config to allow CORS requests for any port on localhost. As long as your client is configured to look at the correct port, the `PORT` environment variable can be used to set this. e.g. `PORT=1337` .__
 
### Running the UI
 
Run `yarn start` from the project directory and everything should build and be served on localhost:3000. Once ready, a new tab in your default browser should open with the app running. This task also runs the file-system watcher for on-the-fly transpilation and hot-reloading.
 
Unit tests can be run with `yarn test`
 
As I used `create-react-app` further information can be found here:
https://github.com/facebookincubator/create-react-app
 
__*NOTE*: The app is currently hard-coded to look use the Heroku instance at https://tech-test-books.herokuapp.com. To run locally, please adjust `./src/api/index.js:3` to set `SERVER_URL` to `http://localhost:5000`. Ideally this should be configured in an .env file, but due to time constraints I have left it this way.__
 
### Adding/Removing Test Data
 
You can click the cog icon below the app title to open the admin panel. This allows you to generate random book data and clear the database of all records. For the sake of stability and minimising dyno usage, it would be preferable not to hammer this functionality on the Heroku version. 
 
The database is in-memory, but will persist data to disk to reload when the server is restarted. A million records can be generated and paged through, sorted and filtered by multiple criteria. Performance when working with that many records isn’t amazing, but is still usable and performs better than anticipated. The majority of the testing was done with 10,000 – 100,000 records in the db. The deployed version has 10,000 pre-populated records, but these can be deleted or added to as described above.
 
# Analysis
Due to limitations in time, some compromises had to be made that would not be done in production code. Therefore, I wanted to detail various things that I think could be improved, as well as things that I am happy with.
 
## Things I've Done
  - Create a fast server/db solution to enable sorting, paging, filtering and persistence
  - Attractive UI that works across all device sizes
  - Feedback for errors and loading state, with custom Casumo spinner
  - Multiple filter criteria supported
  - Realistic random data generation
  - TDD for the data generation logic
  - Use of Redux Sagas for side-effects
  - FP with Ramda for terse, composable functions, and immutable data processing
  - Good test coverage on the server-side and for reducers in the front-end
  - Use functional stateless components where possible
 
## Things I Wanted To Do
  - Tighten up linting on the front-end, also use the Casumo eslint preset like the back-end does
  - TDD on the front-end as well as on the server
  - Improve test coverage to be 100% or close enough within reason
  - Use Jest snapshot tests for components
  - Test and document cross-browser support
  - Add proper parameter validation for requests to the back-end
  - Make it easier to clone and run without manually changing server URL/port
 
## Things I'd Change
  - Use Koa instead of Restify (I’ve been doing more with Koa in my current job)
  - Use a better scaffold/boilerplate for the backend
  - Set up CI for deployments
  - Use a single isomorphic repo with server-side rendering
  - Tidy up SASS to use more variables and mixins
  - Replace react-bootstrap with something more lightweight and easier to customise
  - Find a higher-resolution image for the Casumo spinner for @2x, @3x support
  - Group front-end files by function rather than type
  - Get linting/coverage set up pre-commit
 
## Trello Board
 
https://trello.com/b/iJBWetfi/casumo-tech-test
 
I used a kanban approach throughout developing this project. I find it helps greatly to break up development into small documented tasks, even when hacking something together on my own.
 
 
# Screenshots/GIFs

#### Loading Spinner
![Loading Spinner](http://i.imgur.com/IPc6tUb.gif)
 
#### Multiple Filters
![Multiple Filters](http://i.imgur.com/bdiPyK6.gif)
 
#### Admin Panel
![Admin Panel](http://i.imgur.com/D0ac5Yc.gif)
![Admin Panel](http://i.imgur.com/BPuwBZZ.png)
 
#### Mobile
![Mobile](http://i.imgur.com/ojA67dF.png)
 
#### Tablet
![Tablet](http://i.imgur.com/Tl4X0r3.png)
 
#### Desktop
![Desktop](http://i.imgur.com/Goro2kC.png)
