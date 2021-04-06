// http://numeraljs.com/
const numeral = require('numeral')

/* 取值 */
let num = numeral(974)
console.log(num.value())    // 974

num = numeral(0.12345)
console.log(num.value())    // 0.12345

num = numeral('10,000.12')
console.log(num.value())    // 10000.12

num = numeral('23rd')
console.log(num.value())    // 23

num = numeral('$10,000.00')
console.log(num.value())    // 10000

num = numeral('100B')
console.log(num.value())    // 100

num = numeral('3.467TB')
console.log(num.value())    // 3467000000000

num = numeral('-76%')
console.log(num.value())    // -0.76

num = numeral('2:23:57')
console.log(num.value())    // 8637

/* 格式化 */
let str = numeral('100000000000000').format('0,0')
console.log(str)    // 100,000,000,000,000

str = numeral('100.23').format('0,0')
console.log(str)    // 100

str = numeral('100.23').format('0,0.0')
console.log(str)    // 100.2

str = numeral('100.23').format('0,0.0000')
console.log(str)    // 100.2300

str = numeral('1').format('Oo')
console.log(str)    // 1st

str = numeral('10').format('Oo')
console.log(str)    // 10th

str = numeral('63846').format('00:00:00')
console.log(str)    // 17:44:06
