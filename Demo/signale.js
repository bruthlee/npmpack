const signale = require('signale');
const {Signale} = require('signale')

signale.success('Operation successful');
signale.debug('Hello', 'from', 'L59');
signale.pending('Write release notes for %s', '1.2.0');
// signale.fatal(new Error('Unable to acquire lock'));
signale.watch('Recursively watching build directory...');
signale.complete({prefix: '[task]', message: 'Fix issue #59', suffix: '(@klauscfhq)'});

/**
    ✔  success   Operation successful
    ⬤  debug     Hello from L59
    ☐  pending   Write release notes for 1.2.0
    ✖  fatal     Error: Unable to acquire lock 
        at Object.<anonymous> (/Users/lixiaoyong/Documents/code/npmpack/Demo/signale.js:6:15)
        at Module._compile (internal/modules/cjs/loader.js:689:30)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
        at Module.load (internal/modules/cjs/loader.js:599:32)
        at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
        at Function.Module._load (internal/modules/cjs/loader.js:530:3)
        at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
        at startup (internal/bootstrap/node.js:283:19)
        at bootstrapNodeJSCore (internal/bootstrap/node.js:743:3)
    …  watching  Recursively watching build directory...
    [task] ☒  complete  Fix issue #59 (@klauscfhq)
 */


const options = {
    disabled: false,
    interactive: false,
    stream: process.stdout,
    scope: 'custom',
    types: {
        remind: {
        badge: '**',
        color: 'yellow',
        label: 'reminder'
        },
        santa: {
        badge: '🎅',
        color: 'red',
        label: 'santa'
        }
    }
};

const custom = new Signale(options);
custom.remind('Improve documentation.');
custom.santa('Hoho! You have an unused variable on L45.');