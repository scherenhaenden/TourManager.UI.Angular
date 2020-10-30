#Build Angular app
echo 'build starting' 
echo 'linux build' 

cd ./AngularApp/
npm install
npm install -g @angular/cli


ng build --configuration="production"

cd ..
mkdir -p ./TourManager.UI.Angular/TourManagerWeb/wwwroot
cp ./AngularApp/dist/TourManagerUI/* ./TourManager.UI.Angular/TourManagerWeb/wwwroot
git log --tags --simplify-by-decoration --pretty="format:%ci %d"










