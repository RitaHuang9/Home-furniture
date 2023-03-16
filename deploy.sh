#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 選擇部署到main還是分支
# if you are deploying to https://<USERNAME>.github.io
# git push -f https://github.com/RitaHuang9/Home-furniture.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/RitaHuang9/Home-furniture.git main:gh-pages

cd -