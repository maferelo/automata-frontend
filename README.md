# Automata Frontend

> Frontend using expo with React native
> using best practices with reference notes.

[![codecov](https://codecov.io/gh/maferelo/automata-backend/branch/develop/graph/badge.svg?token=GWW6DXXDZO)](https://codecov.io/gh/maferelo/automata-backend)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/maferelo/automata-frontend/tree/develop.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/maferelo/automata-backend/tree/main)
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
yarn expo start --tunnel
```

### Linting

```bash
pre-commit run -a
```

### Dependencies

Use the package manager [poetry](https://python-poetry.org/) to install requirements

```bash
yarn expo install
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

### Tests

Unit and integration test

```bash

```

End to end testing

```bash

```

## Deployments

Using [Heroku](https://python-poetry.org/) Create staging and production apps

```bash

```

## References

- [Project homepage](https://your.github.com/automata/)
- [Repository](https://github.com/maferelo/automata/)
- [Issue tracker](https://github.com/your/maferelo/issues)
  - In case of sensitive bugs like security vulnerabilities, please contact
    maferelo13@gmail.com directly instead of using issue tracker. We value your effort
    to improve the security and privacy of this project!
- Related projects
  - Your other project
  - Someone else's project
  - [Awesome README](https://github.com/matiassingers/awesome*readme)
