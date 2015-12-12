var test = require('tape')
var basename = require('./')

test('it works', function (assert) {
  var grin = basename('😏')
  var flag = basename('🇰🇷')
  assert.equal(grin, '1f60f')
  assert.equal(flag, '1f1f0-1f1f7')
  assert.end()
})
