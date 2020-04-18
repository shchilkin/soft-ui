# express-force-https

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Express middleware to redirect all http requests to https.

## Usage

[![NPM](https://nodei.co/npm/express-force-https.png)](https://www.npmjs.com/package/express-force-https)

A simple module to check if the current request is using https. If not, it will redirect to the same route, but using https. It also checks for cases of localhost and disables the redirect if so.

```
npm i express-force-https
```

```
var express = require('express');
var secure = require('express-force-https');

var app = express();
app.use(secure);
```
## License

MIT, see [LICENSE.md](http://github.com/njam3/express-force-https/blob/master/LICENSE.md) for details.
