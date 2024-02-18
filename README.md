# Shift4 Homework

This project is built using [Next.js](https://nextjs.org/), styled with [@xstyled/emotion](https://xstyled.dev/) and tested with [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/).

## Design vs. Architectural Decisions

A document named `design_vs_architectural_decisions.pdf` has been added to the repository to provide insight into the pivotal decisions made during the development process.

## Getting Started

To run this project, you need Node.js version `v20.11.1`. We recommend using NVM (Node Version Manager) to manage Node.js versions. To install or switch to the required Node.js version, follow these steps:

1. Install NVM following the instructions on [GitHub NVM](https://github.com/nvm-sh/nvm).
2. In the project directory, run `nvm install 20.11.1` or `nvm use` if you already have the required version installed.

Install the dependencies:

```bash
npm install
```

or

```bash
yarn install
```

To run the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Building for Production

To create a production build:

```bash
npm run build
```

or

```bash
yarn build
```

To start the production server:

```bash
npm run start
```

or

```bash
yarn start
```

## Linting and Formatting

To lint the project files:

```bash
npm run lint
```

or

```bash
yarn lint
```

To format the project files with Prettier:

```bash
npm run prettier
```

or

```bash
yarn prettier
```

## Running Tests

To run tests with Jest:

```bash
npm run test
```

or

```bash
yarn test
```

## Code Coverage

To generate coverage report run:

```bash
npm run test --coverage
```

or

```bash
yarn test --coverage
```

To view the coverage report, open the file `coverage/lcov-report/index.html` in your web browser after running tests.

## Troubleshooting Tests

If your tests are not working as expected, follow these steps to troubleshoot the issue:

1. Delete yarn.lock File: Sometimes, the dependencies locked in yarn.lock might cause conflicts or issues. Remove this file to reset the dependency lock.

```bash
rm yarn.lock
```

2. Delete node_modules Directory: The node_modules directory may contain corrupted or incompatible versions of packages. Removing it allows for a fresh installation of dependencies.

```bash
rm -rf node_modules
```

3. Run yarn install Command: After removing the yarn.lock file and node_modules directory, reinstall all dependencies to ensure you have the correct versions installed.

```bash
yarn install
```

4. Run tests according to documentation

```bash
yarn test
```

## Dependencies

This project uses several key dependencies:

- Next.js for server-rendered React applications.
- @xstyled/emotion for CSS-in-JS styling.
- Jest and Testing Library for unit and integration testing.
