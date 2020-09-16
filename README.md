# Bookless Setup

## Gitbash

- Download Git Bash --> https://gitforwindows.org

- just click ok and next while installing no special settings needed

- open Git Bash

- Login
    ```
    git config --global user.name [Your User name]

    git config --global user.email [Your Email]
    ```

## Get the repos

- Create a Folder Syp anywhere you want

- Right click in the empty Syp folder and click 'Git Bash here'

- git clone https://github.com/CodeChrisB/BooklessDocs

- now you have a folder called BooklessDocs

- Change something to any file. (Write your name into the .md file)

- cd BooklessDocs

- git add . (Adding new files)

- git commit -am 'MESSAGE ABOUT THE CHANGE'

- git push (send change to github)

- cd .. (go back to the parent folder)

- repeat the clone step with this Repo --> https://github.com/CodeChrisB/bookless

## End Result

 You now have a folder structure like this.

 ```
Syp
│
└───Bookless
│   │  This is the folder
│   │  for our projects source code
│   
└───BooklessDocs
    │   Here we will keep track 
    │   of our documents E.g sprints, Powerpoints, etc.
```

# About Pushing and Pulling

- to get the newest version use git pull

- there can be merge problems

- to pull you have to be in correct folder

- - syp/bookless or syp/booklessdocs


# Only for version control important

## Add a branch

- git checkout -b (branch name)

- work in branch add commit

- git push -u origin (branch name)

## Delete a branch

- git push origin --delete (branch name)

## Get current version

- codechrisb.github.io/version.html



#### Written By Buchberger Christopher
#### @CodeChrisB