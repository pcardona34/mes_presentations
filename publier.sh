#!/bin/sh

deploy() {

echo "Publishing on the gh-pages..."

git add *
sleep 3
git commit -m "Mise à jour : nouvelle(s) présentations(s)"
git push

}

deploy