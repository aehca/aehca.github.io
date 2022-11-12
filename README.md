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
