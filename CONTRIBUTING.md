### Contribution guide

the steps to contribute to this project are straight-forward:

1. fork the repo.
2. clone it to your local machine:

```bash
git clone git@github.com:@user/corona-src.git
```
don't forget to change @user to your actual username.

3. create a dev branch (optional): 

```bash
git checkout -b dev
```
**NOTICE:** if you skip this step, go directly to step 7 after making modifications and pushing to the origin master branch.

4. write the changes you want to make.
5. push the changes to origin repo (your remote repo that you forked earlier...):

```bash
git pull -u origin dev
```

6. create a pull request in your repo from dev to master branch.
7. create a pull request to the upstream repo (found at @celyes/corona-src).