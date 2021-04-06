// https://mikemcl.github.io/bignumber.js/
const BigNumber = require('bignumber.js')

let x = new BigNumber(123.4567)
let y = BigNumber('123456.7e-3')
let z = new BigNumber(x)
let res = x.isEqualTo(y) && y.isEqualTo(z) && x.isEqualTo(z)
console.log(res)
// true


x = new BigNumber('1111222233334444555566')
console.log(x.toString())
// 1.111222233334444555566e+21
console.log(x.toFixed())
// 1111222233334444555566