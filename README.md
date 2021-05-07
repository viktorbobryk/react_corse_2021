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

Lector reviewing the code after author reviewed student can merge code into **main** student branch. 

In case there are some comments from author, student have to fix and resolve them(press 'Resolve conversation''). 
In case user don't agree with comment or have any additional question, or comment wasn't clear he type question in conversation,
we will try to resolve that. After all that student tweak code according to comments and push changes. 
If all conversation was resolved he can merge feature branch and delete(feature branch).

**NOTE**: after merging feature branch into main one, feature branch have to be deleted.

**NOTE**: **Pay attantion pattern for main branch has changed**.

## Naming conventions
Student main branch - `<student-name>/react/main (e.g. yaroslav-sydoryk/react/main)`

Feature branch - `<student-name>/lesson-<number>/<smart-comment> (e.g. yaroslav-sydoryk/lesson-4/react)`

Commit message - `#<issue_number> - some smart commit message`

## Design
There is no specific design for project. Design it's up to developer(student).
 
Live demo:  https://demo.realworld.io/#/

**Recommendation**: It better to not use any lib (with existing components) in order to practice styles(plain css). 

## Front-end

#### Routing Guidelines

- Home page (URL: /#/ )
    - List of tags
    - List of articles pulled from either Feed, Global, or by Tag
    - Pagination for list of articles
- Sign in/Sign up pages (URL: /#/login, /#/register )
    - Uses JWT (store the token in localStorage)
- Settings page (URL: /#/settings )
- Editor page to create/edit articles (URL: /#/editor, /#/editor/article-slug-here )
- Article page (URL: /#/article/article-slug-here )
    - Delete article button (only shown to article's author)
    - Render markdown from server client side
    - Comments section at bottom of page
    - Delete comment button (only shown to comment's author)
- Profile page (URL: /#/profile/:username, /#/profile/:username/favorites )
    - Show basic user info
    - List of articles populated from author's created articles or author's favorite articles

Like a ref you can use live demo: https://demo.realworld.io/#/ for understanding how it should looks like.

But very often on practice for front-end development no design (even wireframes) to build new pages(apps), 
and design and structure have to be build based on customer specs often by FE dev.
So try to develop your creativity (and design as well 😉)

## Backend side

***[API link](https://conduit.productionready.io/api)*** 

***[API spec link](https://github.com/gothinkster/realworld/tree/master/api)***