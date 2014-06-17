var tostr = require('./')
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
