var test = require('tape');
var isValidPin = require('../is-valid-pin');

test('is valid pin', function (t) {
  t.plan(7);

  t.equal(isValidPin(3423), true);
  t.equal(isValidPin(342328, {length: 6}), true);
  t.equal(isValidPin(28), false);
  t.equal(isValidPin('s344'), false);
  t.equal(isValidPin({}), false);
  t.equal(isValidPin(''), false);
  t.equal(isValidPin(), false);
});
