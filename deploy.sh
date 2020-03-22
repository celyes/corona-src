set -e
npm run webpack
git add .
git commit -m "$1"
git push origin master
