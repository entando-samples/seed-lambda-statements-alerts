deploy the lambda service in the microservices folder 
see https://quarkus.io/guides/amazon-lambda-http

cp -r bundle-src bundle

build the MF: cd microfrontends/view-statements-mf && npm install && npm run build 

cd ../.. && cp -r microfrontends/view-statements-mf/build/static bundle/resources/widgets/view-statements-mf/static

deploy the bundle to your git repo
https://dev.entando.org/v6.3/tutorials/ecr/publish-simple-bundle.html#manual-steps


enjoy


