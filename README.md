# Track24 Framework
This framework is the Track24 toolset that we use to build front end applications. It uses [storybook](https://storybook.js.org/) to display all the components that you can play around with.

### Installation

Simply run 
```shell
npm install 
```

### Usage

If you're using it in the Hub project: 

```js
const Button from window.Framework
```


### Develop components with Storybook

```shell
npm run storybook
npm run watch-css
```

Open http://localhost:9001/ in your favorite web browser.

Then import your component(s) into stories/index.jsx and render them like so:

```js
storiesOf("Some component name", module)
  .add("Default", () => (
    <ComponentName />
  ))
  .add("Some variation", () => (
    <ComponentName prop="value" />
  ));
```

### Exporting your latest storybook changes

```shell
npm run storybook-export
```

Then commit the generated files and view your latest changes [here]().


### Contributing

Please read the [guidelines]() for contributing before making a pull request.