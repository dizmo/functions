let cp = require('child_process'),
    ps = require('process'),
    fs = require('fs');

function arg(key, lhs, rhs) {
    let y = require('yargs')
        .default('build', true)
        .default('cover', false)
        .default('lint', true);
    return y.argv[key]
        ? lhs !== undefined ? lhs : y.argv[key] : rhs;
}
function run(cmd, ...args) {
    return new Promise((res, rej) => cp.spawn(cmd, args, {
        shell: true, stdio: 'inherit'
    }).on('exit', (code) =>
        code === 0 ? res(code) : rej(code)
    ));
}
function run_install(flag) {
    if (flag) {
        run('npm', 'install')
            .then(run_build).catch(ps.exit);
    } else {
        run_build(0);
    }
}
function run_build() {
    let build = (...args) => [
        'build', arg('lint', '--lint', '--no-lint')
    ].concat(args);
    if (arg('build')) {
        run('npm', 'run-script', '--', ...build())
            .then(run_mocha).catch(ps.exit);
    } else {
        run_mocha(0);
    }
}
function run_mocha() {
    let nyc = (...args) => [
        './node_modules/nyc/bin/nyc.js'
    ].concat(args);
    let mocha = (...args) => [
        './node_modules/mocha/bin/mocha'
    ].concat(args);
    run('node', arg('cover', ...nyc()), ...mocha('dist/test'))
        .then(ps.exit).catch(ps.exit);
}

fs.access('./node_modules', run_install);
