const dayjs = require('dayjs')

console.log(dayjs('2018-08-08'))
/**
 * d {
        '$L': 'en',
        '$d': 2018-08-07T16:00:00.000Z,
        '$x': {},
        '$y': 2018,
        '$M': 7,
        '$D': 8,
        '$W': 3,
        '$H': 0,
        '$m': 0,
        '$s': 0,
        '$ms': 0 
    }
 */

console.log(dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A'))
// {2021} 04-06T14:03:24 552 Z PM

console.log(dayjs().set('month', 3).month())
// 3

console.log(dayjs().add(1, 'year'))
/**
 * d {
        '$L': 'en',
        '$d': 2022-04-06T06:03:24.561Z,
        '$x': {},
        '$y': 2022,
        '$M': 3,
        '$D': 6,
        '$W': 3,
        '$H': 14,
        '$m': 3,
        '$s': 24,
        '$ms': 561 
    }
 */

console.log(dayjs().isBefore(dayjs()))
// false