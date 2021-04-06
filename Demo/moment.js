const moment = require('moment')

console.log(moment().format('YYYY-MM-DD, HH:mm:ss'))
// 2021-04-06, 13:58:37

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
// April 6th 2021, 1:57:02 pm

console.log(moment().format('dddd'))
// Tuesday

console.log(moment().format('MMMM Do YY'))
// April 6th 21

console.log(moment().format('YYYY [escaped] YYYY'))
// 2021 escaped 2021

console.log(moment().format())
// 2021-04-06T13:57:02+08:00

console.log(moment("20111031", "YYYYMMDD").fromNow())
// 9 years ago

console.log(moment().startOf('day').fromNow())
// 14 hours ago

console.log(moment().endOf('day').fromNow())
// in 10 hours

console.log(moment().startOf('hour').fromNow())
// a few seconds ago