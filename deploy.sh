#!/bin/bash

set -e  # Exit on error

SCRIPT_NAME=$(basename "$0")

# 1. Clean current directory, but DO NOT delete this script or the .git folder
find . -mindepth 1 \( -name "$SCRIPT_NAME" -o -name ".git" \) -prune -o -exec rm -rf {} +

# 2. Copy 'dist' from Docker container
docker cp modern_portfolio-portfolio-1:/app/dist /mnt/r/Portfolio/portfolio-deploy/Muhammad-NSQ.github.io/

# 3. Copy contents of 'dist' into current directory
cp -r dist/* .

# 4. Update .gitignore to exclude node_modules
echo "node_modules" > .gitignore

# 5. Remove the 'dist' directory
rm -r dist/

# 6. Git add, commit, and push
git add .
git commit -m "Update portfolio deployment"
git push

