const gulp = require('gulp');
const path = require('path');

const constants = require('./constants');

const font_paths = [
    path.join(__dirname, '../node_modules/material-icons/iconfont/MaterialIcons-Regular.woff2'),
    path.join(__dirname, '../node_modules/material-icons/iconfont/MaterialIcons-Regular.woff'),
    path.join(__dirname, '../node_modules/material-icons/iconfont/MaterialIcons-Regular.ttf')
];

/**
 * Outputs the fonts
 * @returns {Promise} A promise for when the fonts have been outputted
 */
function fonts() {
    const dist_path = path.join(constants.getDistDir(), constants.CSS);

    return gulp.src(font_paths)
        .pipe(gulp.dest(dist_path));
}

module.exports = {
    default: fonts
};