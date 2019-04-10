# Windows only powershell
dotnet publish -c Release 
# Windows only powershell
cp dockerfile ./bin/release/netcoreapp2.2/publish
# Windows only docker cli
docker build -t docket-court-lists-image ./bin/release/netcoreapp2.2/publish
# Windows only docker cli
docker tag docket-court-lists-image registry.heroku.com/docket-court-lists/web
# Windows only docker cli
docker push registry.heroku.com/docket-court-lists/web
# Windows only powershell
heroku container:release web -a docket-court-lists

# sudo chmod 755 deploy.sh
# ./deploy.sh