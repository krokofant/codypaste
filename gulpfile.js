"use strict";
const gulp = require("gulp");
const packager = require("electron-packager");
const packagerOptions = require("./package.json")[ "electron-packager" ];

/**
 * Build
 */
gulp.task("build", function() {
    return packager( packagerOptions, function done( err, appPath ) {
        if ( err ) {
            console.log( err );
        } else {
            console.log( appPath );
        }
    });
});
