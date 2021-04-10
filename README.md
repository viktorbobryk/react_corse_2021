# Repository for course

## Description
All practical tasks(code) will be  shared and stored in this repo.
All code review and materials sharing will be also covered here.

## Home tasks
Each task for the lesson will be described in specific issue ([issues page](https://github.com/yaryk/react-course-sigma-april-2021/issues)).
After each lesson lector will share home task in text variant here in issues. 

Issues which contains home task have to be:
1. Name should match pattern `lesson-<number>: hometask`
2. `Hometask` label have to be attached

In case of any questions you can ask directly in issue comments (DO NOT forget mention lector in comment) or ask in messenger

## Additional materials
After each lesson lector will share additional material for additional reading(watching).
This material will be shared via [issues](https://github.com/yaryk/react-course-sigma-april-2021/issues) as well as home tasks.

Issues which contains home task have to be:
1. Name should match pattern `lesson-<number>: additional materials`
2. `Additional materials` label have to be attached

In case of any questions you can ask directly in issue comments (DO NOT forget mention lector in comment) or ask in messenger

## Workflow
For each practice task student have to create new main branch from main branch for lesson which was posted by lector.
From the main branch (with original code) student have to create a new feature branch were will cover task.

Student works on the branch once accomplish assigment student have to create pull request(**to main branch**) and assign lector of the course to review.

Lector reviewing the code after successfully passing of the review code will be approved and merged into **main** student branch. 

In case there are some comments from author, student have to resolve them (answer or refactor code accordingly) and push changes and lector will review it again.

**NOTE**: after merging feature branch into main one, feature branch have to be deleted.

**NOTE**: this workflow will be slightly changed after starting from lesson 4 and after 12 lesson (no worries details will be provided)

## Branch naming conventions
Student main branch - `<student-name>/lesson-<number>/main (e.g. yaroslav-sydoryk/lesson-2/main)`

Feature branch - `<student-name>/lesson-<number>/<smart-comment> (e.g. yaroslav-sydoryk/lesson-2/auth-implemnetation)`

Commit message - `#<issue_number> - some smart commit message`
