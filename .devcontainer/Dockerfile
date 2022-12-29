ARG APP_NAME=app
ARG NODE_VERSION=16
ARG VARIANT=3.8-bullseye

FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

ARG APP_NAME
ARG NODE_VERSION

ENV \
        APP_PATH=/apps/${APP_NAME} \
        DEBIAN_FRONTEND=noninteractive \
        PYTHONDONTWRITEBYTECODE=1 \
        PYTHONUNBUFFERED=1

ENV \
        APP_BACKEND_PATH=${APP_PATH}/backend \
        APP_FRONTEND_PATH=${APP_PATH}/frontend

# Allow piped commands to fail at any step and run logging mode
SHELL ["/bin/bash", "-celux", "-o", "pipefail"]

USER vscode

RUN \
        --mount=type=cache,target=~/.cache/Homebrew \
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"; \
        echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.bashrc; \
        eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"; \
        brew install watchman

RUN \
        --mount=type=cache,target=~/.cache/heroku \
        curl https://cli-assets.heroku.com/install.sh | sh

RUN \
        --mount=type=cache,target=~/.cache/pypoetry \
        curl -sSL https://install.python-poetry.org | python -

RUN \
        --mount=type=cache,target=/usr/local/share/nvm/.cache,uid=1000 \
        export NVM_DIR="/usr/local/share/nvm"; \
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"; \
        nvm install ${NODE_VERSION}

WORKDIR ${APP_BACKEND_PATH}

COPY ${APP_BACKEND_PATH}/pyproject.toml ${APP_BACKEND_PATH}/poetry.lock .

RUN \
        --mount=type=cache,target=~/.cache/pypoetry \
        poetry install; \
        echo "poetry shell" | tee -a ~/.bashrc ~/.profile

WORKDIR ${APP_PATH}

COPY .pre-commit-config.yaml .

RUN \
        --mount=type=cache,target=~/.cache/pre-commit \
        git init .; \
        pre-commit install; \
        pre-commit install-hooks

# /home/vscode/.cache/yarn

COPY . .

RUN sudo chmod +x .devcontainer/postCreate.sh