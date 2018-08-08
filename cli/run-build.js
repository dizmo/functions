const { arg, install, run } = require('./run-util');
const { exit } = require('process');

function run_lint() {
    return arg('lint') ?  run('npm', 'run', 'lint') : Promise.resolve();
}
function run_build() {
    return run('node', './node_modules/typescript/bin/tsc');
}
function run_babel() {
    return run('node', './node_modules/babel-cli/bin/babel.js', '--quiet',
        '--presets=env','--source-maps', '--out-dir', 'dist', 'dist');
}

install('./node_modules')
    .then(run_lint).then(run_build).then(run_babel).catch(exit);
