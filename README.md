# Course project: Conduit 🔥

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project overview
This project is a simple clone of Medium

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

## Project setup
Run next commands to setup the project:
1. `npm i` - install all packages listed in package.json file
2. `npm start` - start the app.

## Workflow 
Create new main branch from main branch for lesson which was posted by lector. 
Starting from this lesson now main branch will stay up to 12 lesson(no needed to create new branch for each lesson task)

From the main branch student have to create a new feature branch were will cover task.

Student works on the branch once accomplish assigment student have to create pull request(**to main branch**) and assign lector of the course to review.

Lector reviewing the code after successfully passing of the review code will be approved and merged into **main** student branch. 

In case there are some comments from author, student have to resolve them (answer or refactor code accordingly) and push changes and lector will review it again.

**NOTE**: after merging feature branch into main one, feature branch have to be deleted.

**NOTE**: **Pay attantion pattern for main branch has changed**.

## Naming conventions
Student main branch - `<student-name>/react/main (e.g. yaroslav-sydoryk/react/main)`

Feature branch - `<student-name>/lesson-<number>/<smart-comment> (e.g. yaroslav-sydoryk/lesson-4/react)`

Commit message - `#<issue_number> - some smart commit message`

## Design
There is no specific design for project. Design it's up to developer.

**Recommendation**: It better to not use any lib in order to practice styles(plain css). 

## Backend side

***[API link](https://conduit.productionready.io/api)*** 

***[API spec link](https://github.com/gothinkster/realworld/tree/master/api)***