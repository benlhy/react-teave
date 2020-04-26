# React Starter

This is a starter React project with required libraries and config to quickly get started on a (DECADA) web app.

## Usage

1. Fork this repo to your project organization, changing the name to {PROJECT}-web-frontend.
2. Build as per normal, modify/add your own code to build your dashboard. Remember to update this README file.
3. For deployment, follow [this guide](https://siotteam.atlassian.net/wiki/spaces/SCC/pages/295829619/Jenkins+General+Setup). The required Docker and Jenkins config files are already included in this repo; you just need to fill in your project info in `Jenkinsfile`. **Note**: remember to add in `"homepage": "/apps/path/here"` to package.json so the app can work at the deployed url.

## Getting started (once forked)

You will need: [node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/docs/install)

1. Install dependencies

`yarn`

2. Run the app

`yarn start`

## What's included

**Libraries**

- [Ant Design](https://ant.design/) - a comprehensive React UI library
- [decada-web-frontend](https://apps.siotgov.tech/docs/decada-web-frontend/) library - convenience methods for retrieving data from DECADA easily
- [decada-common-widgets](https://apps.siotgov.tech/docs/decada-common-widgets-storybook/) - a suite of DECADA-friendly UI components to easily visualize data obtained from DECADA

**Dev tools**

- Automatic code formatting on commit, using [Prettier](https://prettier.io/). Prettier is set up to format on save.
- SASS - Write and import your css as `.scss` files, they will be auto-compiled
- [Tailwind](https://tailwindcss.com/docs/utility-first) - a utility-first CSS framework for easy & consistent styling

**Configuration**

- Allow absolute imports from `src` (set in `jsconfig.json`)
  - Write imports as `import Button from "components/Button"` instead of ugly stuff like `import Button from "./../../components/Button"` (this still works too)
- Deployment config files for Docker, Jenkins & Nginx

## Contribute

Got any questions, comments, or recommendations for useful tools/tips that aren't included here yet? **Come talk to the UI team!** We'd love to discuss and learn from you too :)

## Learn More

This project was bootstrapped with Create React App.You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
