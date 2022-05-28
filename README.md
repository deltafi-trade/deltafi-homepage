# DeltaFi Homepage

An open source homepage for DeltaFi.

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install relevant packages.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Build docker image and deploy to k8s
```
# Login to docker registry
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 077918681028.dkr.ecr.us-west-2.amazonaws.com

# dev
bash deploy/build_dev.sh
k8s-cli apply -f deploy/dev/main.json.jsonnet
aws cloudfront create-invalidation --distribution-id E3RD3ZADMHNJRF --paths "/*"
```
