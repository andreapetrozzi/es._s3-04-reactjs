news site: Spaceflight, using TypeScript.

Comply with the requests and try to implement types and interfaces as best you can.

     
API Docs:

You can find the entire documentation here –>
https://api.spaceflightnewsapi.net/v3/documentation

The endpoint to get the list of articles will be like this:

     https://api.spaceflightnewsapi.net/v3/articles

Use the id property of each route you want information about

     https://api.spaceflightnewsapi.net/v3/articles/:id


TASKS:
         Implement a nice main page to display API articles; each article must be viewed by a component and must show details such as title, publication date, cover image, etc…
         Clicking on an item should take the user to the detail page, where the data of a particular item will be fetched. Show on this page any information you can get about it.

     

     Suggestions:
         Separate the application into reusable components
         Implement prop and state interfaces for each component when needed
         Implement an interface for the result of the API call only
         Skip the Redux approach and directly fetch the data into the component and save the result in the loca state (we didn't get to talk about Redux with TypeScript, there's a Coding Pill available that talks about it if you're interested!)


// TERMINAL
// npx create-react-app "name-of-my-app" --template typescript
// npm i bootstrap@4.6.1
// npm i react-bootstrap@1.6.5
// npm i react-router-dom





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
