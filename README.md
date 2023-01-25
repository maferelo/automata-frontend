# Automata Frontend

> Frontend using expo with React native
> using best practices with reference notes.

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/maferelo/automata-frontend/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/maferelo/automata-frontend/tree/main)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/maferelo/automata-frontend.git)

If you already have VS Code and Docker installed, you can click the badge above or [here](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/maferelo/automata-frontend.git) to get started. Clicking these links will cause VS Code to automatically install the Dev Containers extension if needed, clone the source code into a container volume, and spin up a dev container for use.

## Prerequisites

Clone repository

```bash
git clone https://github.com/maferelo/automata-frontend.git
cd automata
```

### For Mac

- [Docker](https://www.docker.com/)
- [Homebrew](https://brew.sh/)

```bash
bash scripts/prestart-mac.sh
```

## Development

We use [remote containers](https://code.visualstudio.com/docs/remote/containers-tutorial).

1. Press F1 to open the Command Palette.
2. Type reopen in container.
3. Select Remote Containers: Reopen in Container from the list of available options.

Inside the container run:

```bash
yarn start
```

### Linting [(pre-commit)](https://pre-commit.com/)

```bash
pre-commit run -a
```

### Dependencies [(yarn)](https://classic.yarnpkg.com/lang/en/docs/)

```bash
yarn expo -- install
```

Adding dependencies

```bash
yarn expo -- install <package-name> -- --save-dev --exact
```

Updating dependencies

```bash
yarn expo -- install -- --check-files
yarn outdated
yarn upgrade --exact
```

### Tests [(jest)](https://jestjs.io/docs/getting-started)

Unit and integration test

```bash
yarn test
yarn test --watch # runs for uncommitted files
yarn test --watchAll # runs all tests
```

End to end testing

```bash

```

### Documentation [(storybook)](https://storybook.js.org/docs/ember/get-started/introduction/)

```bash
yarn storybook
```

## Deployments

Using [Heroku](https://python-poetry.org/) Create staging and production apps

```bash

```

## References

- [Project homepage](https://your.github.com/automata-frontend/)
- [Repository](https://github.com/maferelo/automata-frontend/)
- [Issue tracker](https://github.com/maferelo/automata-frontend/issues)
  - In case of sensitive bugs like security vulnerabilities, please contact
    us directly instead of using issue tracker. We value your effort
    to improve the security and privacy of this project!
- [Security & Quality](https://github.com/maferelo/automata-frontend/security)
- Related projects
  - [Automata Backend](https://github.com/maferelo/automata-backend)
  - [Awesome README](https://github.com/matiassingers/awesome*readme)
