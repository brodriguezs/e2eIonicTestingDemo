# E2E Testing demo with ionic 

#### **Keywords:** protractor, web driver, selenium, jasmine, e2e, testing, ionic framework
# Introduction
This is a demo of e2e testing with Ionic3 and latest versions of Protractor and Jasmine. 
# Fundamentals and the slides
This was created for a meetup and this slides are here: [slides](http://slides.com/bryanrodriguezsiatama/e2e-testing-ionic)
That was a recopilation of some materials related to e2e testing with ionic framework (v3 current latest to May 2017), and my own experience working on Ionic and creating e2e Testing.

The code are recopilation of some tutorials and reference guides showed as follow.

# References 
##Guides from Josh Morony:

* [Introduction to e2e] (https://www.joshmorony.com/e2e-end-to-end-testing-in-ionic-2-an-introduction/)
* [E2E testing in Ionic: Structuring Tests With Page Objects] (https://www.joshmorony.com/e2e-end-to-end-testing-in-ionic-2-structuring-tests-with-page-objects/)
* [E2E Testing in ionic2: Test Driven Development] (https://www.joshmorony.com/e2e-end-to-end-testing-in-ionic-2-test-driven-development/)
### How E2E works?:
* [Protractor infraestructure] (http://www.protractortest.org/#/infrastructure)


## Best practices
### Using page objects
* [Page objects with protractor] (http://www.protractortest.org/#/page-objects)
* [Structuring PageObjects by Josh Morony] (https://www.joshmorony.com/e2e-end-to-end-testing-in-ionic-2-structuring-tests-with-page-objects/)
* [Another info related] (https://github.com/SeleniumHQ/selenium/wiki/PageObjects)

# Solving issues
* [Typings bug with jasmine versions > 2.5.45] (https://github.com/DefinitelyTyped/DefinitelyTyped/issues/15215)

# Tesing at all
## Fundamentals
* [Testing Blog recomendations of Google Testing Blog VERY INTERESTING!!] (https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)
## Unit testing
* [Unit Testing for App by Josh Morony](https://www.joshmorony.com/how-to-unit-test-an-ionic-2-application/)

## Reference to write E2E tests with protractor and jasmine:
* [Protractor quick guide for write E2E tests](http://www.protractortest.org/#/tutorial)
* [Using locators in protractor (VERY USEFULL!!)](http://www.protractortest.org/#/locators)
* [Jasmine framework reference guide](https://jasmine.github.io/2.5/introduction.html) 

### Style Guide
* [Protractor style guide] (http://www.protractortest.org/#/style-guide)

### Another links about testing:
* [SeleniumWebDriver] (http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html)
* [An introduction to TDD by Josh Morony] (https://www.joshmorony.com/test-driven-development-in-ionic-2-an-introduction-to-tdd/)
* [Angular testing: TestBed?] (https://angular.io/guide/testing#!#testing-intro)

## How to use this demo

### With the Ionic CLI:

Afterwards clone this repo, please follow the next steps:

```bash
$ npm install
```
Then to run apropiately the e2e tests, please install globally Protractor and update the webdriver as follow:
```bash
$ npm install -g protractor
$ webdriver-manager update
```
**NOTE** Be sure that you are some obviusly pre requisites like: node.js, ionic framework, and JDK. 
Then, to run the tests, at first run ionic serve or compile at first the project (you have to recompile each time you make changes to the project):
```bash
$ ionic serve
```
and after from your root of the project run:
```bash
$ protractor
```
if all its ok, the chrome browser will be launched and the e2e test example will to be executed.

## Feel free to make your contributions or open issues
All the contributions and issues will be received.

## License
MIT License

Copyright (c) 2017

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

