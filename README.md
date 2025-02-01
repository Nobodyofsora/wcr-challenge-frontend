# WeCanRace Challenge Frontend
This is a Welcome Page with Login and Signup paired with [wcr-challenge-backend](https://github.com/WECANRACE/wcr-challenge-backend/tree/main) and built with Ionic/Angular and using libraries like Angular Material and Spline.

Make sure to have the [backend](https://github.com/WECANRACE/wcr-challenge-backend) running on localhost:3030
### Deployment

Clone this repository and install the dependecies:
```bash
npm i
```

Run the dev server:
```bash
ionic serve
```
## Dependencies

### Core Angular Packages
- **`@angular/animations`**: Enables animation capabilities in the application.
- **`@angular/cdk`**: Component Dev Kit for foundational utilities and custom component development.
- **`@angular/common`**: Provides commonly used services, pipes, and directives.
- **`@angular/compiler`**: Angular's template compiler. It understands Angular templates and can convert them to code that makes the application run.
- **`@angular/core`**: The core library for building Angular applications.
- **`@angular/forms`**: Supports both template-driven and reactive forms.
- **`@angular/material`**: Implements Material Design components for UI development.
- **`@angular/platform-browser`**: Facilitates running Angular applications in a web browser.
- **`@angular/platform-browser-dynamic`**: Supports Just-In-Time (JIT) compilation during development.
- **`@angular/router`**: Enables routing and navigation.

### Capacitor runtime
- **`@capacitor/app`**: The App API handles high level App state and events.
- **`@capacitor/core`**: The core library for Capacitor
- **`@capacitor/haptics`**: The Haptics API provides physical feedback to the user through touch or vibration.
- **`@capacitor/keyboard`**: The Keyboard API provides keyboard display and visibility control.
- **`@capacitor/status-bar`**: The StatusBar API Provides methods for configuring the style of the Status Bar.

### Ionic
- **`@ionic/angular`**: Ionic Angular specific building blocks on top of @ionic/core components.

### Spline
- **`@splinetool/runtime`**: A runtime library for embedding and interacting with Spline 3D scenes.

### Utility Libraries
- **`rxjs`**: A library for reactive programming and handling asynchronous data streams.
- **`tslib`**: Reduces code duplication by providing TypeScript helpers.
- **`zone.js`**: Provides an execution context for Angular's change detection mechanism.


### Development Tools
- **`@angular-devkit/build-angular`**: Tools for building Angular projects.
- **`@angular-eslint/builder`**: An Angular CLI Builder which is used to execute ESLint on your Angular projects using standard commands such as ng lint.
- **`@angular-eslint/eslint-plugin`**: An ESLint-specific plugin that contains rules which are specific to Angular projects. 
- **`@angular-eslint/eslint-plugin-template`**:  An ESLint-specific plugin which, when used in conjunction with @angular-eslint/template-parser, allows for Angular template-specific linting rules to run.
- **`@angular-eslint/schematics`**:  Schematics which are used to add and update configuration files which are relevant for running ESLint on an Angular workspace.
- **`@angular-eslint/template-parser`**: An ESLint-specific parser which leverages the @angular/compiler to allow for custom ESLint rules to be written which assert things about your Angular templates.
- **`@angular/cli`**: Angular Command Line Interface for project generation and management.
- **`@capacitor/cli`**: The Capacitor command-line interface should be installed locally and executed through npm scripts.
- **`@ionic/angular-toolkit`**: Ionic Angular specific building blocks on top of @ionic/core components.
- **`@types/jasmine`**: TypeScript compiler for writing type-safe code.
- **`@typescript-eslint/eslint-plugin`**: An ESLint plugin which provides lint rules for TypeScript codebases.
- **`@typescript-eslint/parser`**:An ESLint parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code.
- **`eslint`**: ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **`eslint-plugin-import`**: This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
- **`eslint-plugin-jsdoc`**: JSDoc linting rules for ESLint.
- **`eslint-plugin-prefer-arrow`**: ESLint plugin to prefer arrow functions.
- **`jasmine-core`**: A testing framework used with Karma.
- **`jasmine-spec-reporter`**: Real time console spec reporter for jasmine testing framework.
- **`karma`**: A test runner for unit testing.
- **`karma-chrome-launcher`**: Runs tests in a Chrome browser.
- **`karma-coverage`**: Generates code coverage reports.
- **`karma-jasmine`**: Adapter for using Jasmine with Karma.
- **`karma-jasmine-html-reporter`**: Displays test results in the browser.
- **`typescript`**: This package contains type definitions for jasmine.

---

## Project Structure

```plaintext
wcr-challenge-frontend/
│
├── src/
│   ├── app/                  # Main application folder
│   │   ├── components/       # Reusable components
│   │   ├── services/         # Shared services like AuthService
│   │   ├── app.module.ts     # Main Angular module
│   │   ├── app.component.ts  # Root component
│   ├── assets/               # Static assets like images and styles
│   ├── environments/         # Environment-specific configurations
│   ├── main.ts               # Application entry point for the client
│   ├── global.scss            # Global SCSS styles
│   └── index.html            # Application entry point
│
├── dist/                     # Compiled application files
├── node_modules/             # Installed dependencies
├── angular.json              # Angular CLI configuration
├── capacitor.config.ts       # Capacitor configuration
├── ionic.config.ts           # Ionic configuration
├── karma.config.ts           # Karma configuration
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
├── tsconfig.app.json         # TypeScript configuration for app
├── tsconfig.json             # TypeScript configuration
└── tsconfig.spec.json        # TypeScript configuration for test
```



## Documentation

**Ionic Documentation**  
   The official Ionic documentation was essential for integrating components and for CLI troubleshooting.  
   [Ionic Documentation](https://ionicframework.com/)

**Spline Documentation**  
   Despite being super intuitive, the official Spline documentation was used for exporting the animation in vanillaJS code 
   [Spline Documentation](https://spline.design)

**Angular Material Documentation**  
   The official Angular Material documentation was critical for implementing UI components and applying a global theme
   [Angular Material Documentation](https://material.angular.io/)

**Stack Overflow**  
   Consulted for troubleshooting and resolving specific implementation challenges.  
   [Stack Overflow](https://stackoverflow.com)