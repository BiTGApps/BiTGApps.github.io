# This file is part of The BiTGApps Project

export BUNDLE_PATH := $(CURDIR)/.gems

all:
	bundle install
	script/bootstrap
	bundle exec jekyll serve

clean:
	rm -f .bundle _site
	rm -f .jekyll-cache
