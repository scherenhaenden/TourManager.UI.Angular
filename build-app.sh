#Build Angular app
echo 'build starting' 
echo 'linux build' 


npm install
npm install -g @angular/cli

cd ./AngularApp/
ng build --configuration="production"

git log --tags --simplify-by-decoration --pretty="format:%ci %d"










