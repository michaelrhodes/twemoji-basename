# twemoji-basename
Because sometimes you want to use twemoji but without all the library bloat.

[![Build status](https://travis-ci.org/michaelrhodes/twemoji-basename.png?branch=master)](https://travis-ci.org/michaelrhodes/twemoji-basename)

## Install
```sh
$ npm install twemoji-basename
```

## Usage
```js
var basename = require('twemoji-basename')
var template = '//twemoji.maxcdn.com/36x36/{basename}.png'

var image = new Image
image.src = template.replace('{basename}', basename('🇰🇷'))
document.body.appendChild(image)
```

![Korean flag](https://twemoji.maxcdn.com/36x36/1f1f0-1f1f7.png)

## License
[MIT](http://opensource.org/licenses/MIT)
