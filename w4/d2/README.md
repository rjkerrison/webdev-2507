---
layout: default
permalink: /:path/
title: Express
parent: 'Week 4: Serving Data'
nav_order: 2
---

# Week 4: Day 2

Today, we are going to build an Express server on NodeJS.

But first up, a [recap of yesterday](./checks-for-understanding.html)!

## Setup your project

### Create a workspace

`npm init -y`
This will create a `package.json` file which will save all of the npm packages you will install in this project.

### What is node_modules

Everything you install through `npm install <name-of-your-package>` is going to be stored in a folder called `node_modules` and a reference to it (the name of the package) will be stored in `package.json`
`node_modules` is an heavy folder, we probably don't want to send it to github, to do that we will need to ignore it.

### Ignoring files

Ignoring files to send to github is easy thanks to the `.gitignore` file!
Create a `.gitignore` file using `touch .gitignore` or create it through VSCode interface.
The `.gitignore` file should be at the root of your project.
If you are in a folder tracked by git and you write `node_modules` in the `.gitignore` file, you will see that `node_modules` is not tracked anymore by git if you run `git status`
