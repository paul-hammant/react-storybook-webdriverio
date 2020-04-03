# A simple react + typescript + storybook application

Install dependencies:

```sh
npm install react react-dom webpack webpack-cli webpack-dev-server typescript @types/react @types/react-dom ts-loader
```

```sh
npm install @storybook/react --save-dev
```

```sh
# Add this in the package.json scripts
"storybook": "start-storybook"
```

```sh
# development build
npm run dev
# Browse: http://localhost:8080/

# production build
npm run prod
# Serve the index file from the public folder

# run storybook
npm run storybook
```
