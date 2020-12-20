#Build Angular app
echo 'build starting' 
echo 'linux build' 

cd ./AngularApp/

echo 'add npm packages' 
npm install

echo 'build angular app' 
ng build --configuration="production"

echo 'copy app into wwwroot'' solution' 
cd ..
mkdir -p ./TourManager.UI.Angular/TourManagerWeb/wwwroot
cp ./AngularApp/dist/TourManagerUI/* ./TourManager.UI.Angular/TourManagerWeb/wwwroot

echo 'restore solution' 
cd ./TourManager.UI.Angular/ 
dotnet restore

echo 'create published solution' 
dotnet publish -c Release -o out/app/publish -r linux-x64 -p:PublishSingleFile=true --self-contained true

#Run like this
#/TourManager.UI.Angular/out/app/publish/TourManagerWeb