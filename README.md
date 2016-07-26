<<<<<<< HEAD
# React.js Boilerplate

[![Dependency Status][dep-status-img]][dep-status-link] [![devDependency Status][dev-dep-status-img]][dev-dep-status-link] [![Build Status][ci-img]][ci] [![Join the chat at https://gitter.im/mxstbr/react-boilerplate](https://badges.gitter.im/mxstbr/react-boilerplate.svg)](https://gitter.im/mxstbr/react-boilerplate?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Quick setup for new performance orientated, offline–first React.js applications featuring Redux, hot–reloading, PostCSS, react-router, ServiceWorker, AppCache, FontFaceObserver and Mocha.

Made with :heart: by [Max Stoiber](https://twitter.com/mxstbr)!

[dep-status-img]: https://david-dm.org/mxstbr/react-boilerplate.svg
[dep-status-link]: https://david-dm.org/mxstbr/react-boilerplate
[dev-dep-status-img]: https://david-dm.org/mxstbr/react-boilerplate/dev-status.svg
[dev-dep-status-link]: https://david-dm.org/mxstbr/react-boilerplate#info=devDependencies
[ci-img]: https://travis-ci.org/mxstbr/react-boilerplate.svg?branch=master
[ci]: https://travis-ci.org/mxstbr/react-boilerplate

-----
=======
<img src="https://raw.githubusercontent.com/mxstbr/react-boilerplate-brand/master/assets/banner-metal.jpg" alt="react boilerplate banner" align="center" />

<br />

<div align="center"><strong>Start your next react project in seconds</strong></div>
<div align="center">A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices</div>

<br />

<div align="center">
  <!-- Dependency Status -->
  <a href="https://david-dm.org/mxstbr/react-boilerplate">
    <img src="https://david-dm.org/mxstbr/react-boilerplate.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/mxstbr/react-boilerplate#info=devDependencies">
    <img src="https://david-dm.org/mxstbr/react-boilerplate/dev-status.svg" alt="devDependency Status" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/mxstbr/react-boilerplate">
    <img src="https://travis-ci.org/mxstbr/react-boilerplate.svg" alt="Build Status" />
  </a>
  <!-- Test Coverage -->
  <a href="https://coveralls.io/r/mxstbr/react-boilerplate">
    <img src="https://coveralls.io/repos/github/mxstbr/react-boilerplate/badge.svg" alt="Test Coverage" />
  </a>
</div>
<div align="center">
    <!-- Backers -->
  <a href="#backers">
    <img src="https://opencollective.com/react-boilerplate/backers/badge.svg" alt="Backers" />
  </a>
      <!-- Sponsors -->
  <a href="#sponsors">
    <img src="https://opencollective.com/react-boilerplate/sponsors/badge.svg" alt="Sponsors" />
  </a>
  <!-- Gitter -->
  <a href="https://gitter.im/mxstbr/react-boilerplate">
    <img src="https://camo.githubusercontent.com/54dc79dc7da6b76b17bc8013342da9b4266d993c/68747470733a2f2f6261646765732e6769747465722e696d2f6d78737462722f72656163742d626f696c6572706c6174652e737667" alt="Gitter Chat" />
  </a>
</div>

<br />

<div align="center">
  <sub>Made with ❤︎ by <a href="https://twitter.com/mxstbr">Max Stoiber</a> and <a href="https://github.com/mxstbr/react-boilerplate/graphs/contributors">contributors</a>. <i>If you're using this boilerplate, we'd love to <a href="https://github.com/mxstbr/react-boilerplate/issues/115">hear from you</a>!</i></sub>
</div>
>>>>>>> mxstbr/master

Version 3.0 is actively being developed on the [v3.0.0 branch], please check it out and leave feedback!
(PRs on `master` are not going to be merged.)

[v3.0.0 branch]: https://github.com/mxstbr/react-boilerplate/tree/v3.0.0

## Features

<<<<<<< HEAD
- Using [**react-transform-hmr**](https://github.com/gaearon/react-transform-hmr), your changes in the CSS and JS get reflected in the app instantly without refreshing the page. That means that the **current application state persists** even when you change something in the underlying code! For a very good explanation and demo, watch Dan Abramov himself [talking about it at react-europe](https://www.youtube.com/watch?v=xsSnOQynTHs).

- [**Redux**](https://github.com/rackt/redux) is a much better implementation of a flux–like, unidirectional data flow. Redux makes actions composable, reduces the boilerplate code and makes hot–reloading possible in the first place. For a good overview of redux, check out the talk linked above or the [official documentation](https://gaearon.github.io/redux/)!

- [**Babel**](http://babeljs.io/) is a modular JavaScript transpiler that helps to use next generation JavaScript and more, like transformation for JSX, hot loading, error catching etc. Babel has a [solid ecosystem of offical preset and plugins](https://github.com/babel/babel/tree/master/packages).

- [**PostCSS**](https://github.com/postcss/postcss) is like Sass, but modular and capable of much more. PostCSS is, in essence, just a wrapper for plugins which exposes an easy to use, but very powerful API. While it is possible to [replicate Sass features](https://github.com/jonathantneal/precss) with PostCSS, PostCSS has an [ecosystem of amazing plugins](http://postcss.parts) with functionalities Sass cannot even dream about having. See [this talk](http://mxs.is/pctalk) for a short introduction to PostCSS.

- **Unit tests** should be an important part of every web application developers toolchain. [Mocha](https://github.com/mochajs/mocha) checks your application is working exactly how it should without you lifting a single finger. Congratulations, you just won a First Class ticket to world domination, fasten your seat belt please!

- [**react-router**](https://github.com/rackt/react-router) is used for routing in this boilerplate. react-router makes routing easy to do and takes care of most of the work. (except you have to define your routes yourself) You can find the documentation right  [here](https://github.com/rackt/react-router/blob/master/doc/00%20Guides/0%20Overview.md).

- [**ServiceWorker**](http://www.html5rocks.com/en/tutorials/service-worker/introduction/) and [**AppCache**](http://www.html5rocks.com/en/tutorials/appcache/beginner/) make it possible to use your application offline. As soon as the website has been opened once, it is cached and available without a network connection. See [this talk](http://mxs.is/swtalk) for an explanation of the ServiceWorker used in this boilerplate. [**`manifest.json`**](https://developer.chrome.com/multidevice/android/installtohomescreen) is specifically for Chrome on Android. Users can add the website to the homescreen and use it like a native app!

## Getting started

1. Clone this repo using `git clone https://github.com/mxstbr/react-boilerplate.git`.

2. Delete the existing git repository by running `rm -rf .git`.

3. Initialize a new git repository with `git init`, `git add .` and `git commit -m "Initial commit"`.

4. Run `npm install` to install the dependencies.

5. Run `npm start` to start the local web server.

6. Go to `http://localhost:3000` and you should see the app running!

## Building & Deploying

1. Run `npm run build`, which will compile all the necessary files in a `build` folder.

2. Upload the contents of the `build` folder to your web server.

### Server Configuration

#### Apache

This boilerplate includes a `.htaccess` file that does two things:

1. Redirect all traffic to HTTPS because ServiceWorker only works for encrypted traffic

2. Rewrite all pages (e.g. yourdomain.com/subpage) to the `index.html` to let `react-router` take care of presenting the correct page

## CSS

The CSS modules found in the `css` subfolders all get imported into one big file (`main.css`), which gets transpiled with PostCSS.

See the [`css` folder README](css/README.md) for more information about the PostCSS plugins used and the CSS structure.

## JS

All files that are `import`ed/`require`d somewhere get compiled into one big file at build time. (`build/bundle.js`) Webpack automatically optimizes your JavaScript with `UglifyJS`, so you don't have to worry about that.

See the [`js` folder README](js/README.md) for more information about the JS structure.

## Testing

### Browser testing

With `npm run serve` you can start a server that's accessible in the entire local network and shows the version of the app that's in the `build` folder. Useful for testing on different devices!

### Unit testing

Unit tests live in the `test` directory, and are run with `npm test`. There are two files in there already, testing that the current AppActions and Reducers are working correctly. Mocha is used as a unit testing framework, check out the official [documentation](http://mochajs.org)!

## Files in the root folder

For a full explanation of all files in the root folder, see [`docs/FILES.md`](docs/FILES.md).

## Opinionated features

### Web Fonts

If you simply use web fonts in your project, the page will stay blank until these fonts are downloaded. That means a lot of waiting time in which users could already read the content.

[FontFaceObserver](https://github.com/bramstein/fontfaceobserver) adds a `js-<font-name>-loaded` class to the `body` when the fonts have loaded. You should specify an initial `font-family` with safe fonts on the `body`, and a `.js-<font-name>-loaded` `font-family` which includes your web font. See [app.js](js/app.js#L17-L25) and [base.css](css/base/_base.css#L26-L32).

#### Adding a new font

1. Either add the `@font-face` declaration to `base/_fonts.css` or add a `<link>` tag to the [`index.html`](index.html). (Don't forget to remove the `<link>` for Open Sans from the [`index.html`](index.html))

2. In `base/_base.css`, specify your initial `font-family` in the `body` tag with only safe fonts. In the `body.js-<font-name>-loaded` tag, specify your `font-family` stack with your web font.
=======
<dl>
  <dt>Quick scaffolding</dt>
  <dd>Create components, containers, routes, selectors and sagas - and their tests - right from the CLI!</dd>

  <dt>Instant feedback</dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</dd>
>>>>>>> mxstbr/master

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more, today.</dd>

  <dt>Next generation CSS</dt>
  <dd>Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.</dd>

  <dt>Industry-standard routing</dt>
  <dd>It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.</dd>

  <dt>Offline-first</dt>
  <dd>The next frontier in performant web apps: availability without a network connection from the instant your users load the app.</dd>

  <dt>SEO</dt>
  <dd>We support SEO (document head tags management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl>

But wait... there's more!

  - *The best test setup:* Automatically guarantee code quality and non-breaking
    changes. (Seen a react app with 99% test coverage before?)
  - *Native web app:* Your app's new home? The home screen of your users' phones.
  - *The fastest fonts:* Say goodbye to vacant text.
  - *Stay fast*: Profile your app's performance from the comfort of your command
    line!
  - *Catch problems:* AppVeyor and TravisCI setups included by default, so your
    tests get run automatically on Windows and Unix.

There’s also a <a href="https://vimeo.com/168648012">fantastic video</a> on how to structure your React.js apps with scalability in mind. It provides rationale for the majority of boilerplate's design decisions.

<sub><i>Keywords: React.js, Redux, Hot Reloading, ESNext, Babel, PostCSS, Autoprefixer, react-router, Offline First, ServiceWorker, CSS Modules, redux-saga, FontFaceObserver, PageSpeed Insights</i></sub>

## Quick start

1. Clone this repo using `git clone --depth=1 https://github.com/mxstbr/react-boilerplate.git`
1. Run `npm run setup` to install dependencies and clean the git repo.<br />
   *At this point you can run `npm start` to see the example app at `http://localhost:3000`.*
1. Run `npm run clean` to delete the example app.

Now you're ready to rumble!

> Please note that this boilerplate is **not meant for beginners**! If you're just starting out with react or redux, please refer to https://github.com/petehunt/react-howto instead.

## Documentation

- [Intro](docs/general): What's included and why
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.

## Supporters

This project would not be possible without the support by these amazing folks. [**Become a sponsor**](https://opencollective.com/react-boilerplate) to get your company in front of thousands of engaged react developers and help us out!

<div align="center">
<a href="http://reactjsprogram.com/?utm_source=react-boilerplate&utm_medium=banner&utm_campaign=React%20Boilerplate">
  <img src="https://cloud.githubusercontent.com/assets/7525670/16642421/09f0d97c-440b-11e6-92f6-05d680946629.png" alt="React.js Program – A linear approach to learning the React.js ecosystem!" height="120px">
</a>
</div>

----

<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/0/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/1/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/2/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/3/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/4/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/5/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/6/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/7/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/8/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/bronze-sponsor/9/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/bronze-sponsor/9/avatar.svg"></a>

----

<a href="https://opencollective.com/react-boilerplate/backer/0/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/1/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/2/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/3/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/4/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/5/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/6/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/7/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/8/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/react-boilerplate/backer/9/website" target="_blank"><img src="https://opencollective.com/react-boilerplate/backer/9/avatar.svg"></a>


## How to contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for infos on how you can help!

## License

<<<<<<< HEAD
This project is licensed under the MIT license, Copyright (c) 2016 Maximilian Stoiber. For more information see `LICENSE.md`.
=======
This project is licensed under the MIT license, Copyright (c) 2016 Maximilian
Stoiber. For more information see `LICENSE.md`.
>>>>>>> mxstbr/master
