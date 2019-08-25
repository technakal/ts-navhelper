const { series, parallel } = require('gulp');

function clean(cb) {
  cb();
}

function typescript(cb) {
  cb();
}

function sass(cb) {
  cb();
}

function transpile(cb) {
  typescript();
  sass();
  cb();
}

function minify(cb) {
  cb();
}

if (process.env.NODE_ENV === 'production') {
  exports.default = series(clean, transpile, minify);
} else {
  exports.default = series(clean, transpile);
}
