install: install-deps
	npx simple-git-hooks

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint 

publish:
	npm publish

install:
	npm	ci

brain-games:
	node bin/brain-games.js

 publish:
	npm publish --dry-run
	name: Java CI

on:
  - push
  
  - pull_request

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-java@v3
        with:
          java-version: '20'
          distribution: 'temurin'
      - uses: gradle/gradle-build-action@v2
        with:
          gradle-version: 8.3
      - run: ./gradlew checkstyleMain
      - run: ./gradlew test
      - name: Publish code coverage
         uses: paambaati/codeclimate-action@v5.0.0
         env:
		 	CC_TEST_REPORTER_ID: ${{secrets.CC_TEST_REPORTER_ID}}	
			JACOCO_SOURCE_PATH: app/src/main/java
         with:
coverageCommand: make report
           coverageLocations: ${{github.workspace}}/build/reports/jacoco/test/jacocoTestReport.xml:jacoco