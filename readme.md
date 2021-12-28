# Building Website with Webpack Starter Pack
## Installing Packages
```
npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin copy-webpack-plugin clean-webpack-plugin css-loader style-loader nodemon eslint
```
## Initializing Eslint
```
npx eslint --init
```
- How would you like to use ESLint? -> To check, find problems, and enforce code style.
- What type of modules does your project use? -> JavaScript modules (import/export).
- Which framework does your project use? -> None of these.
- Does your project use TypeScript? -> N.
- Where does your code run? -> Browser.
- How would you like to define a style for your project? -> Use a popular style guide.
- Which style guide do you want to follow? -> AirBnB.
- What format do you want your config file to be in? -> JSON.

## Starting For Development
Starting development with starting server in port 5500.
```
npm run devStart1
```
Or starting development with nodemon (without starting server).
```
npm run devStart2
```

## Running Server
Run live server in path: ```./dist```.

## Building and Deploying For Production
1. Run build command
   ```
   npm run build
   ```
2. Deploy ```./dist``` path.