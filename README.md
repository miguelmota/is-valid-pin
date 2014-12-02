# is-valid-pin

Validate pin number

# Install

```bash
npm install is-valid-pin
```

# Usage

```javascript
var isValidPin = require('is-valid-pin');

isValidPin(3423) // true
isValidPin(342328, {length: 6}) // true
isValidPin(28) // false
isValidPin('s344') // false
```

# License

MIT
