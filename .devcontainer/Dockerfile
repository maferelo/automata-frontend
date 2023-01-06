# hadolint global ignore=DL3009,DL3042,DL3060,SC1091
# Lint: https://hadolint.github.io/hadolint/
ARG HADOLINT_VERSION
ARG IMAGE_VARIANT
ARG NODE_VERSION
ARG NVM_VERSION
ARG PRE_COMMIT_VERSION
ARG PYTHON3_PIP_VERSION
ARG WATCHMAN_VERSION
ARG YARN_VERSION

# Devcontainers ubuntu image:
# https://github.com/microsoft/vscode-dev-containers/tree/main/containers/ubuntu
FROM mcr.microsoft.com/devcontainers/base:${IMAGE_VARIANT}

ARG HADOLINT_VERSION
ARG NODE_VERSION
ARG NVM_VERSION
ARG PRE_COMMIT_VERSION
ARG PYTHON3_PIP_VERSION
ARG WATCHMAN_VERSION
ARG YARN_VERSION

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
    cp -nRT ~/.cache/build.update /var/lib/apt/lists/; \
    apt-get update 2>&1 | tee ~/update.log; \
    cp -fnRT /var/lib/apt/lists/ ~/.cache/build.update

# Install hadolint heroku python3-pip watchman
RUN \
    --mount=type=cache,target=/root/.cache/build.apt-get \
    cp -nRT ~/.cache/build.apt-get /var/cache/apt/archive/; \
    export DEBIAN_FRONTEND=noninteractive; \
    apt-get install --no-install-recommends -y \
        python3-pip=${PYTHON3_PIP_VERSION} \
        watchman=${WATCHMAN_VERSION} \
        2>&1 | tee ~/install.dependencies.log; \
    curl https://cli-assets.heroku.com/install.sh | sh; \
    curl -o /bin/hadolint \
        https://github.com/hadolint/hadolint/releases/download/v${HADOLINT_VERSION}/hadolint-Linux-x86_64; \
    chmod +x /bin/hadolint; \
    cp -fnRT /var/cache/apt/archive/ ~/.cache/build.apt-get

USER vscode

RUN \
    mkdir -p \
        ~/.cache \
        ~/.vscode-server/extensions \
    ;
# Install nvm
RUN \
    --mount=type=cache,target=/home/vscode/.cache/build.nvm,uid=1000,gid=1000 \
    --mount=type=cache,target=/home/vscode/.cache/build.npm,uid=1000,gid=1000 \
    cp -nRT ~/.cache/build.nvm ~/.nvm; \
    cp -nRT ~/.cache/build.npm ~/.npm; \
    curl -o- \
        https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh \
        | bash 2>&1 | tee ~/install.nvm.log; \
    export NVM_DIR="$HOME/.nvm"; \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"; \
    npm install -g yarn@${YARN_VERSION} 2>&1 | tee ~/install.yarn.log; \
    cp -fnRT ~/.nvm ~/.cache/build.nvm; \
    cp -fnRT ~/.npm ~/.cache/build.npm

# Install pre-commit
RUN \
    --mount=type=cache,target=/home/vscode/.cache/build.pip,uid=1000,gid=1000 \
    cp -nRT ~/.cache/build.pip ~/.cache/pip; \
    python3 -m pip install pre-commit==${PRE_COMMIT_VERSION} \
        2>&1 | tee ~/install.pip.pre-commit.log; \
    cp -fnRT ~/.cache/pip ~/.cache/build.pip

WORKDIR /app

COPY \
    .pre-commit-config.yaml \
    ./

# Install pre-commit hooks
RUN \
    --mount=type=cache,target=/home/vscode/.cache/build.pre-commit,uid=1000,gid=1000 \
    cp -nRT ~/.cache/build.pre-commit ~/.cache/pre-commit; \
    git init && ~/.local/bin/pre-commit install-hooks \
        2>&1 | tee ~/install.pre-commit.hooks.log; \
    cp -fnRT ~/.cache/pre-commit ~/.cache/build.pre-commit

COPY \
    package.json \
    yarn.lock \
    ./

# Install node dependencies
RUN \
    --mount=type=cache,target=/home/vscode/.cache/build.node_modules,uid=1000,gid=1000 \
    cp -nRT ~/.cache/build.node_modules node_modules; \
    export NVM_DIR="$HOME/.nvm"; \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"; \
    yarn install 2>&1 | tee ~/install.yarn.log; \
    cp -fnRT node_modules ~/.cache/build.node_modules
