/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
/* https://github.com/twitter/twemoji/blob/gh-pages/LICENSE */

module.exports = function (str) {
  var r = []
  var c = 0
  var p = 0
  var i = 0
  var l = str.length

  while (i < l) {
    c = str.charCodeAt(i++)
    if (p) {
      r.push((0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00)).toString(16))
      p = 0
    } else if (0xD800 <= c && c <= 0xDBFF) {
      p = c
    } else {
      r.push(c.toString(16))
    }
  }

  return r.join('-')
}
