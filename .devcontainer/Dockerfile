ARG IMAGE_VARIANT
ARG NODE_VERSION
ARG NVM_VERSION
ARG PRE_COMMIT_VERSION
ARG PYTHON3_PIP_VERSION
ARG WATCHMAN_VERSION

# Devcontainers ubuntu image:
# https://github.com/microsoft/vscode-dev-containers/tree/main/containers/ubuntu
FROM mcr.microsoft.com/devcontainers/base:${IMAGE_VARIANT}

ARG NODE_VERSION
ARG NVM_VERSION
ARG PRE_COMMIT_VERSION
ARG PYTHON3_PIP_VERSION
ARG WATCHMAN_VERSION

# Bash reference: https://www.man7.org/linux/man-pages/man1/bash.1.html
SHELL ["/bin/bash", "-ceux", "-o", "pipefail"]

# Create cache directory to store all caches
RUN \
    mkdir -p ~/.cache

# Cache is loaded and updated in each RUN command because inline buildkit cache
# is temporary and available only on build
# Buildkit reference:
# https://github.com/moby/buildkit/blob/master/frontend/dockerfile/docs/reference.md

# Update pat-get package lists
RUN \
    --mount=type=cache,target=/root/.cache/build.update \
    cp -RT ~/.cache/build.update /var/lib/apt/lists/; \
    apt-get update > ~/update.log 2>&1; \
    cp -fRT /var/lib/apt/lists/ ~/.cache/build.update

# Install python3-pip
RUN \
    --mount=type=cache,target=/root/.cache/build.apt-get \
    cp -RT ~/.cache/build.apt-get /var/cache/apt/archive/; \
    export DEBIAN_FRONTEND=noninteractive; \
    apt-get install --no-install-recommends -y \
        python3-pip=${PYTHON3_PIP_VERSION} \
        > ~/install.python3-pip.log 2>&1; \
    cp -fRT /var/cache/apt/archive/ ~/.cache/build.apt-get

# Install watchman
RUN \
    --mount=type=cache,target=/root/.cache/build.apt-get \
    cp -RT ~/.cache/build.apt-get /var/cache/apt/archive/; \
    export DEBIAN_FRONTEND=noninteractive; \
    apt-get install --no-install-recommends -y \
        watchman=${WATCHMAN_VERSION} \
        > ~/install.watchman.log 2>&1; \
    cp -fRT /var/cache/apt/archive/ ~/.cache/build.apt-get

USER vscode

RUN \
    mkdir -p ~/.cache

# Install nvm
RUN \
    --mount=type=cache,target=/home/vscode/.cache/build.nvm,uid=1000,gid=1000 \
    cp -RT ~/.cache/build.nvm ~/.nvm; \
    curl -o- \
        https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh \
        | bash > ~/install.nvm.log 2>&1; \
    cp -fRT ~/.nvm ~/.cache/build.nvm

# Install pre-commit
RUN \
    --mount=type=cache,target=/home/vscode/.cache/build.pip,uid=1000,gid=1000 \
    cp -RT ~/.cache/build.pip ~/.cache/pip; \
    python3 -m pip install pre-commit==${PRE_COMMIT_VERSION} \
        > ~/install.pip.pre-commit.log 2>&1; \
    cp -fRT ~/.cache/pip ~/.cache/build.pip

WORKDIR /app

COPY \
    .pre-commit-config.yaml \
    ./

# Install pre-commit hooks
RUN \
    --mount=type=cache,target=/home/vscode/.cache/build.pre-commit,uid=1000,gid=1000 \
    cp -RT ~/.cache/build.pre-commit ~/.cache/pre-commit; \
    git init && ~/.local/bin/pre-commit install-hooks \
        > ~/install.pre-commit.hooks.log 2>&1; \
    cp -fRT ~/.cache/pre-commit ~/.cache/build.pre-commit

COPY \
    package.json \
    package-lock.json \
    ./

# Install node dependencies
RUN \
    export NVM_DIR="$HOME/.nvm"; \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"; \
    npx --version > ~/install.node.dependencies.log 2>&1
