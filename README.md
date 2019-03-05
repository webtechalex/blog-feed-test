This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Test Instructions

You have been given a small React application called blog feed. It currently displays a list of blog articles, each item containing the title and body of the article. FYI, the data comes from the 'posts' resource on the [jsonplaceholder](https://jsonplaceholder.typicode.com/) API.

Your task is to extend this application to consume data from the 'comments' resource at the above API.

User stories:
1. Each post displays a button labelled "Show Comments" underneath the post body
2. When I click the button, I see the comments for that post under the aforementioned button.
3. Each comment displays the name, email and body data from the comment data
4. When comments are visible on a post, the button displays "Hide Comments"
5. When I click the button again, the comments are hidden

Notes:
- Show/hide behaviour for comments on each post are independent of the behaviour for other posts (I can show as many or as few comment lists as I like at any given time).
- Ideally, I don't want to have to re-fetch comments I have already loaded previously, but you should also assume that this is a real-time application and comments can be updated while hidden. How will you handle that scenario?

Advice:
- Keep it simple. We want to see well composed components with properties and methods that have semantic names. Show that you know how to abstract application logic into small, maintainable components.
- Think first - code later. It might help to draw up a simple [component hierarchy](https://reactjs.org/docs/thinking-in-react.html) to help you understand what components you might need to create and how they relate to each other before you start building anything. Think about what state you need to keep and what props you might need pass down the tree.
- Reduce complexity. If you are not sure how to handle some complex requirement, break it down to something simpler and code that. Solving a simpler problem can often offer insight into a tougher one.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
