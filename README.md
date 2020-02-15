# jack-stuff

## Git branching

In order to manage changes to our code base we will be using git for our source control. This will also allow us to use github to coordinate our work. I would advise you to do some reading up on git. The git fundamentals course on pluralsight is pretty good. 

When working on a ticket please use the following process. It will make more sense with a bit of practice and we can go over it.

1. Using git bash go to the root of the folder where we cloned the repo
    1. `cd /c/stuff/demo/jack-stuff`
1. Create a new branch from master.
    1. `git checkout master`
    1. `git pull`
    1. `git checkout -b <YOUR BRANCH NAME HERE>`
1. Push that branch up to the remote repo.
    1. `git push -u origin <YOU BRANCH NAME HERE>`
1. When you have a meaningful set of changes you will need to commit them. Think of comitting like saving your progress.
    1. `git add .`
    1. `git commit -m "<MEANINGFUL MESSAGE HERE>"`
1. You will probably make several commits for each piece of work.
    1. repeat as step 4
    1. if you want to check your commits you can either:
        1. `git log`
        1. `gitk`
1. when you have made all your changes push the commits to the remote repository.
    1. `git push`
1. Create a pull request (PR).
    1. Go in to git hub and navigate to your branch.
    1. There should be a button visible for creating a PR.

## Alternative to Git Bash

An aletrnative to using Git Bash is using **VsCode**. This is done in same the same way once you have opened the terminal option in *VsCode*. 
1. 'git checkout master'
1. 'git pull'
1. 'git checkout -b 3-editing-read-me'
1. 'git push -u origin 3-editing-read-me'
1. 'git add .'
1. 'git commit m- "added vscode instruction"
This acts as a quicker way to upload edits without having to use the git bash console
