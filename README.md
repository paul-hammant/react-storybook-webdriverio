# A simple react + typescript + storybook application

Install dependencies:

```sh
npm install
```

## development build

```
npm run dev
```

Browse: http://localhost:8080/  ???

# production build

```
npm run prod
```

# run storybook

```
npm run storybook
```


# run webdriverio

Might need the storybook process running already. And you might 
need to note the port it runs on and place that in `test/specs/app.js`

```
npm run wdio
```

Yup, the wdio target should auto-start the storybook server and correlate the ports automatically.

# TODO

* More package.json upgrades
* More tests