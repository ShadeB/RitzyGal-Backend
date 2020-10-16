# Contributing to this repository

1.Fork the repository (the fork button is located at the upper right-hand corner of the repo site: `https://github.com/ShadeB/RitzyGal-Backend.git`)

2. When the repository has successfully been forked you will be redirected to your copy of the repository

3. Clone your copy of the repository to your local machine.

4. Add remote as upstream:

```sh
  git remote add upstream https://github.com/ShadeB/RitzyGal-Backend.git
```

5. Update local repository with changes from the source
   ```sh
     git fetch upstream
     git merge upstream/develop
   ```
6. Switch to a branch you want to hold your changes

   ```sh
     git checkout -b branch-name
   ```

7. Commit your changes
   ```sh
     git commit -m "commit message in double quotes"
   ```
8. Push the branch you have created to your fork of the project

   ```sh
     git push origin branch-name
   ```

9. Go to your fork of the repository and open a pull request by clicking the compare and pull request option. The pull request should be opened on the original repo's develop branch.
