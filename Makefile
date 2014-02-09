#!/usr/bin/make

NPM_BIN ?= "$(HOME)/node_modules/.bin"

all:
	$(NPM_BIN)/borschik -i css/style.css > css/_style.css
	$(NPM_BIN)/borschik -i js/script.js > js/_script.js
