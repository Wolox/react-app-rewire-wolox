# react-app-rewire-wolox [WIP]

Add CSS Modules + SASS and Babel config Webpack config to a [`react-app-rewired`](https://github.com/timarney/react-app-rewired) config.

## Installation

```
yarn add --dev react-app-rewire-wolox
```

OR

```
npm install --save-dev react-app-rewire-wolox
```

In your react-app-rewired configuration:

```js
/* config-overrides.js */

const rewireWolox = require("react-app-rewire-wolox");

module.exports = function override(config, env) {
  // ...
  config = rewireWolox(config, env);
  // ...
  return config;
};
```

## License

**react-app-rewire-wolox** is available under the MIT [license](LICENSE).

    Copyright (c) 2018 Walter Folini <walter.folini@wolox.com.ar>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
