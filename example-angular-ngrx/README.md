# ExampleAngular2Ngrx

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.2.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` or `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Clone the Repository or Download the Zip file (unzip) 
Run 'npm install' so that node modules get install to the project folder.

## For Upgrading AngularCLI
`npm rm angular-cli @angular/cli`
`npm cache clear`
`rm node_modules`
`npm i -D @angular/cli`
`npm run ng -- update`


Accept all files from update (which used to be called init) other than app module and component, especially (but not limited to) angular-cli.json, polyfills.ts, package.json and main.ts.

Then go to git undo any unwanted change (deleted packages from package.json, missing scripts or files from angular-cli.json, etc). Undo entire app module and component files if you accepted them by accident.

Then Run commands

`npm install` or `yarn` if yarn is installed 
`npm run ng -- build`

And you can go roll with `npm start` / `npm run ng -- serve`.
