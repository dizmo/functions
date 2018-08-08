const { arg, install, run } = require('./run-util');
const { exit } = require('process');

function run_build() {
    return arg('build')
        ? run('npm', 'run', '--', 'build', arg('lint', '--lint', '--no-lint'))
        : Promise.resolve();
}
function run_mocha() {
    return run('npx', arg('cover', 'nyc'), 'mocha', 'dist/test');
}

install('./node_modules')
    .then(run_build).then(run_mocha).catch(exit);
