1. `git init` -> Powers your folder to be managed by GIT, and initializes
a new repository. It also creates a .git folder that has all the relevant logic
to manage version of your project.

2. `Working area` -> There can be a bunch of files that are not currently handled
  by git.
  It means that changes done or to be done in those files are not managed by git yet.
  A file which is in working area is considered to be not in the staging area.
  When we do `git status` then show `untracked files` then these are actually called to be
  in working area.

3. `Staging area` -> What all files are going to part of next version that we
    will create.This staging are is the place where git knows that changes will be
    done from the last version to next version.

4.  `Repository` -> This area actually contains the details of all you previously
    registered version and the files in this area, git already manges them and knows their version history.

5. `git add <file>` -> moves file from working area to staging area.

6. `git rm --cached <file>` -> moves file back from staging area to working area.

7. `commit` -> Commit is a particular version of the project.
    It captures a snapshot of the project's staged changes and creates a version of it.

8. `git commit` ->registers staging changes to a commit.

9. `git log`  -> list down all commit history of repository. Rollback press q

10. `git restore <file>`  -> it removes all files changes from the staging area
    to be commited. This can be useful, if we did some dirty piece of code and
    now no more want it. Instead of deleting every change line by line, we can restore it.

11. `git restore --staged <file>` -> it removes file from changes from staging area to the working area
    this only works if changes are in your staging area

12. Diff between git rm and git restore
answer: if you to want to move the whole file back to the untracked state, then we do git rm,
if we want  changes to be moved working or staging use git restore