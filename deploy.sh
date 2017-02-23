# Credits of this bash script: https://github.com/steveklabnik/automatically_update_github_pages_with_travis_example
#!/usr/bin/env bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

cd dist

git init
git config user.name "Rubén Aguilera"
git config user.email "rulusoft@gmail.com"

git remote add upstream "https://$GH_TOKEN@github.com/raguilera82/ng2-taller.git"
git fetch upstream
git reset upstream/gh-pages

# echo "your-custom-domain.com" > CNAME

touch .

git add -A .
git commit -m "ci(GH-Pages): Rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages