if test -z "$1"
then
	echo "\e[31;1mPlease provide a commit message!\e[0m"
	exit 1
fi

set -e
npm run webpack
git add .
git commit -m "$1"
git push origin master
	
echo "\e[32;1mDeployed successfully! See: https://corona-dz.now.sh\e[0m"
