# tostr

Convert object to string.

## Usage

**NOTE: did not handle the circular**

input

```
var tostr = require('tostr')
var obj = {
  str: "A string",
  num: 0,
  bool: true,
  undef: undefined,
  arr: [1, 2, 3],
  obj: {
    name: "fool2fish", email: "fool2fish@gmail.com"
  },
  func: function(a, b) {
    // some comment
    return a + b
  }
}
var str = tostr(obj)
console.log(str)
```

output

```
{
  str: 'A string',
  num: 0,
  bool: true,
  undef: undefined,
  arr: [
    1,
    2,
    3
  ],
  obj: {
    name: 'fool2fish',
    email: 'fool2fish@gmail.com'
  },
  func: function(a, b) {
    // some comment
    return a + b
  }
}
```

