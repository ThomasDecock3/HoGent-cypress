## If you dont have npm installed already, install nodejs

<p align="center">
Download the Windows Installer from NodeJs official website. Make sure you have downloaded the latest version of NodeJs. It includes the NPM package manager.
https://nodejs.org/en/download/

you can follow the following tutorial: https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac
</p>

Once npm is installed you can open up a terminal, navigate to the cypress project and run the following command 

```bash
npm i
```


<p align="center">
  <a href="https://on.cypress.io">Documentation</a> |
  <a href="https://on.cypress.io/changelog">Changelog</a> |
  <a href="https://on.cypress.io/roadmap">Roadmap</a>
</p>

<h3 align="center">
  The web has evolved. Finally, testing has too.
</h3>

<p align="center">
  Fast, easy and reliable testing for anything that runs in a browser.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/cypress">
    <img src="https://img.shields.io/npm/dm/cypress.svg" alt="npm"/>
  </a>
  <a href="https://gitter.im/cypress-io/cypress">
    <img src="https://img.shields.io/gitter/room/cypress-io/cypress.svg" alt="Gitter chat"/>
  </a>
    <a href="https://stackshare.io/cypress">
    <img src="https://img.stackshare.io/misc/follow-on-stackshare-badge.svg" alt="StackShare"/>
  </a><br />
</p>

## What is Cypress?

<p align="center">
  <a href="https://player.vimeo.com/video/237527670">
    <img alt="Why Cypress Video" src="https://user-images.githubusercontent.com/1271364/31739717-dbdff0ee-b41c-11e7-9b16-bfa1b6ac1814.png" width="75%" height="75%" />
  </a>
</p>

## Installing

[![npm version](https://badge.fury.io/js/cypress.svg)](https://badge.fury.io/js/cypress)

Install Cypress for Mac, Linux, or Windows, then [get started](https://on.cypress.io/install).

```bash
npm install cypress --save-dev
```
or
```bash
yarn add cypress --dev
```

![installing-cli e1693232](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)

To start the UI version of the cypress tests enter one of following commands. This will allow you to run a specific spec page, which should include multiple tests.

```bash
npx cypress open
```

If you prefer a quick check, it's better to run all tests in a headless mode. Headless mode still downloads all the html information yet does not render it on screen. This makes a significant difference in time. And is also how the tests will run in the pipeline, meaning that you should have the habit to run the headless tests before making the pr. 

Enter the following command 
```bash
npx cypress run 
```