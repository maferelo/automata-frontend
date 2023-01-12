# Fix git dubious ownership error
git config --global --add safe.directory /app
# Fix git unable to undo changes
git config core.filemode false
# Fix expo web app
export NODE_OPTIONS=--openssl-legacy-provider
