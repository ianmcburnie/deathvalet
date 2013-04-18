clean:
	-rm -rf node_modules

install:
	-npm install

server_dev:
	NODE_ENV=development nodemon server.js

server_prod:
	NODE_ENV=production node server.js

.PHONY: test
test:
	NODE_ENV=default mocha ./test

deploy_staging:
	git push staging master

deploy_production:
	git push production master