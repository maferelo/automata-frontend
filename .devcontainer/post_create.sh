# Fix git dubious ownership error
sudo git config --global --add safe.directory /app
# Fix git unable to undo changes
git config core.filemode false
