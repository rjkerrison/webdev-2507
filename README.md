# Welcome to WebDev 2507 Paris

Hello WebDev Paris 2507!

Kicking off on 25th July 2022, we'll have 9 weeks to become full-stack web developers.

- [Welcome to WebDev 2507 Paris](#welcome-to-webdev-2507-paris)
  - [Who's the team?](#whos-the-team)
  - [Using this repository](#using-this-repository)
    - [Notes](#notes)
    - [Staying up-to-date](#staying-up-to-date)
    - [In case of issues pulling latest changes](#in-case-of-issues-pulling-latest-changes)
  - [Script helpers](#script-helpers)
    - [Generating groups](#generating-groups)
    - [Checking morning sunshines](#checking-morning-sunshines)
    - [Cloning lab repos](#cloning-lab-repos)

## Who's the team?

Your instructional team includes:

- Robin James Kerrison
- Florian Aube
- Haroun Boudour

## Using this repository

This repo will be updated at least daily. We'll have the latest examples from class, as well as a description of the day's main topics, and links to useful resources.

### Notes

We break the notes down by week.

- [Week 1: Fundamentals](./w1)
- [Week 2: Building Applications](./w2)
- Week 3: Project 1: Building a Game
- Week 4: Serving Data
- Week 5: Advanced Backend
- Week 6: Project 2: Building a REST API
- Week 7: React Basics
- Week 8: Integrating
- Week 9: Project 3: Full-Stack Application

### Staying up-to-date

You can get the latest changes of this repository by running

```sh
git pull
```

You can open this repository in Visual Studio Code by running

```sh
code .
```

from the command-line.

### In case of issues pulling latest changes

In case you need to clear any local changes you have made,
you can run `git stash`, then perform the `git pull`,
and finally restore your changes with `git stash pop`:

```sh
git stash
git pull
git stash pop
```

## Script helpers

This repo comes with a script helper: `students.sh`. Run it and see. This is mainly intended for teaching team use.

### Generating groups

Run `./students.sh groups 3` to generate groups of three.

### Checking morning sunshines

Run `./students.sh sunshine` to find out who is doing morning sunshine next!

### Cloning lab repos

If you want a list of commands that can clone all the lab forks for every student, run `./students.sh lab <lab-repo-name>`. E.g. `./students.sh lab lab-css-instagram-clone`.

You can copy the printed commands and run them wherever you store cloned labs.
