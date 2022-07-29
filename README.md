# Welcome to WebDev 2507 Paris

Hello WebDev Paris 2507!

Kicking off on 25th July 2022, we'll have 9 weeks to become full-stack web developers.

- [Welcome to WebDev 2507 Paris](#welcome-to-webdev-2507-paris)
  - [Who's the team?](#whos-the-team)
  - [Using this repository](#using-this-repository)
    - [In case of issues pulling latest changes](#in-case-of-issues-pulling-latest-changes)
  - [Script helpers](#script-helpers)
    - [Generating groups](#generating-groups)
    - [Checking morning sunshines](#checking-morning-sunshines)

## Who's the team?

Your instructional team includes:

- Robin James Kerrison
- Florian Aube
- Haroun Boudour

## Using this repository

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

This repo comes with a script helper: `students.sh`. Run it and see.

### Generating groups

Run `./students.sh groups 3` to generate groups of three.

### Checking morning sunshines

Run `./students.sh sunshine` to find out who is doing morning sunshine next!
