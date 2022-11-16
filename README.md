# www.eduhealthca.org

The website for the non-profit, AECHA Inc.

Originally written and deployed by David Earles. Now run by and adapted by Andrew Peterson.

## Local Development
This website is developed with Jekyll. It is compatible with Github Pages, which we use to make the site go live.

### To view live changes (may require sudo)
1. `gem install jekyll bundler`
2. `bundle install` (this may update the gemlock file if being run on macos vs windows or vice versa, if that happens, do not push those changes)
3. `bundle exec jekyll serve`
4. http://127.0.0.1:4000 (changes will be shown on refresh (f5 on browser))

## Pre requisites
Jekyll requires Ruby. Your local system must have Ruby and a couple other dependecies (read more [here](https://jekyllrb.com/docs/installation/))

## Github Project Development Workflows
This relates to creating issues and resolving them, and then their pull requests. Does not pertain to Github Actions.

1. Go to the [Project Board](https://github.com/orgs/aehca/projects/1/views/1).
2. In todo, click the + button and choose the aehca project.
3. Type in the ticket name you want to make. It should be a short description of work needed. (it becomes a draft ticket).
4. You can click on the ticket name to edit and add a description.
5. Save.
6. Click on the open in new tab to go specifically to the issue.
7. Click "create a branch" for this issue.
8. Go to your machine, `git checkout master`, then `git pull` then `git checkout <created-branch's name`.
9. Go through and make the changes required in the issue.
10. Commit and push your changes.
11. Create a pull request with the changes in the branch.
