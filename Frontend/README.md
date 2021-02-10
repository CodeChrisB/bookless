# Bookless Setup

[Setup the Project](github.com/CodeChrisB/booklessdocs/md/setup.md)


[Smart Table Libary](https://lorenzofox3.github.io/smart-table-website/)

# Git Bash Commands

- git clone (repolink)                      
    - clone a repo to current destination.

- git add .                 
    - add/track all newly added files to next commit.

- git status                
    - to see untracked files track them with --> git add .

- git commit -am 'Message'                  
    - commit and give a message for clarification.

- git push                                  
    - after commiting you can push your changes.

- git pull                                  
    - before you start working download the newest changes.

- git reset HEAD~1

    - this command will bring you local code to the last committed version, do this if you accidently committed or messed up and want to do it again.

    - using this is your last resort if you messed up the 1 means revert the last 1 commit.

    - never reset more than you have commited for example if you do git reset HEAD~1000 you definitley destroy all we have ever committed (locally), be causious what you do with this command.


# Only for version control important

## Add a branch

- git checkout -b (branch name)

- work in branch add commit

- git push -u origin (branch name)

## Delete a branch

- git push origin --delete (branch name)

## Get current version name

- https://codechrisb.github.io/version.html


## Get current live demo

- https://codechrisb.github.io/bookless

## Get the project as desktop application

- npm run electron

## Build to GH Pages

- npm run pages

---     
 
