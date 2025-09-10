#!/bin/bash
# setup jekyll site locally 
# Install Ruby
sudo apt install ruby ruby-bundler ruby-dev

# Install bundler 
gem install bundler
# Install bundle
bundle install
# Configure Bundler Install Path
bundle config set --local path 'vendor/bundle'
#Add Jekyll
bundle add jekyll
#Create A Jekyll Scaffold
#bundle exec jekyll new --force --skip-bundle .

#Spring up website on localhost
#bundle exec jekyll serve --livereload
bundle exec jekyll serve