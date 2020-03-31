
if test -z "$1"
then
	echo "\e[31;1m Bundling and deployment stopped. Please provide a commit message!\e[0m"
	exit 1
fi

set -e
npm run webpack
git add .
git commit -m "$1"
git push origin master
