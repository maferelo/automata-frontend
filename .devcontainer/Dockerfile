ARG IMAGE_VARIANT
ARG NODE_VERSION
ARG PRE_COMMIT_VERSION
ARG WATCHMAN_VERSION

# Devcontainers ubuntu image: https://github.com/microsoft/vscode-dev-containers/tree/main/containers/ubuntu
FROM mcr.microsoft.com/devcontainers/base:${IMAGE_VARIANT}

ARG NODE_VERSION
ARG PRE_COMMIT_VERSION
ARG WATCHMAN_VERSION

# Bash reference: https://www.man7.org/linux/man-pages/man1/bash.1.html
SHELL ["/bin/bash", "-ceux", "-o", "pipefail"]

RUN \
    --mount=type=cache,target=/home/vscode/.cache \
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -; \
    apt-get update; \
    apt-get install --no-install-recommends -y \
        nodejs \
        pre-commit=${PRE_COMMIT_VERSION} \
        watchman=${WATCHMAN_VERSION}

WORKDIR /app

RUN \
    mkdir -p \
    /home/vscode/.vscode-server/extensions \
    /home/vscode/.cache/pre-commit; \
    chown -R vscode:vscode /home/vscode

USER vscode

COPY \
    package.json \
    package-lock.json \
    ./

COPY \
    .pre-commit-config.yaml \
    ./
