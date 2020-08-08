# <%= name %>

[![Actions Status][actions-img]][actions-url]
[![Build Status][travis-img]][travis-url]
[![License][license-img]][license-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> <%= description %>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (>= 10.12, 12.10 preferred)
- [npm](https://www.npmjs.com) (>= 6.x) or [yarn](https://yarnpkg.com) (>= 1.20)
- [Git](https://git-scm.com) (>= 2.20)

### Clone & Install

```shell
# clone repo
$ git clone https://github.com/<%= github %>/<%= name %>.git
$ cd dashboard
# install dependencies
$ npm install # or yarn
```

### Available Scripts

```shell
# serve with hot reload at http://localhost:8080
$ npm run serve # or yarn serve

# lint the source files.
$ npm run lint # or yarn lint

# build for production with minification
$ npm run build # or yarn build

# build for production and deploy to gh-pages
$ npm run deploy # or yarn deploy
```

## License

[MIT](LICENSE) &copy; [<%= author %>](<%= url %>)



[actions-img]: https://github.com/<%= github %>/<%= name %>/workflows/CI/badge
[actions-url]: https://github.com/<%= github %>/<%= name %>/actions
[travis-img]: https://img.shields.io/travis/com/<%= github %>/<%= name %>
[travis-url]: https://travis-ci.com/<%= github %>/<%= name %>
[license-img]: https://img.shields.io/github/license/<%= github %>/<%= name %>
[license-url]: https://github.com/<%= github %>/<%= name %>/blob/master/LICENSE
[dependency-img]: https://img.shields.io/david/<%= github %>/<%= name %>
[dependency-url]: https://david-dm.org/<%= github %>/<%= name %>
[devdependency-img]: https://img.shields.io/david/dev/<%= github %>/<%= name %>
[devdependency-url]: https://david-dm.org/<%= github %>/<%= name %>?type=dev
[style-img]: https://img.shields.io/badge/code%20style-standard-brightgreen
[style-url]: https://standardjs.com
