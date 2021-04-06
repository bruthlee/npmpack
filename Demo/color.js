const Color = require('color')

const color = Color('#F85858')

console.log(color.object())
/**
 * { r: 248, g: 88, b: 88 }
 */

console.log(color.rgbNumber(), color.hex())
/**
 * 16275544 '#F85858'
 */

console.log(color.hsl())
/**
 * { 
        model: 'hsl',
        color: [ 0, 91.95402298850576, 65.88235294117646 ],
        valpha: 1 
    }
 */

console.log(color.ansi16())
/**
 * { model: 'ansi16', color: [ 91 ], valpha: 1 }
 */

console.log(color.ansi256())
/**
 * { model: 'ansi256', color: [ 210 ], valpha: 1 }
 */

console.log(color.array())
/**
 * [ 248, 88, 88 ]
 */

console.log(color.cmyk().round().array())
/**
 * [ 0, 65, 65, 3 ]
 */

console.log(color.red(), color.green(), color.blue())
/**
 * 248 88 88
 */

console.log(color.isLight(), color.isDark())
/**
 * true false
 */

console.log(color.negate())
/**
 * { model: 'rgb', color: [ 7, 167, 167 ], valpha: 1 }
 */