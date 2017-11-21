'use strict';

const fs = require('fs');
const path = require('path');
const _ = require('lodash');

exports.module = {};
exports.import = function (dir, opts) {
  opts = (opts) ? opts : {};
  var files = fs.readdirSync(dir);
  _.each(files, (file) => {
    let fileObj = path.parse(file);
    let isModule = (fileObj.name !== 'index');

    // console.log(fileObj);

    let acceptedExt = ['', '.js'];

    if (opts.accepts && Array.isArray(opts.accepts)) {
      acceptedExt = opts.accepts;
    }

    if (acceptedExt.indexOf(fileObj.ext) < 0) {
      isModule = false;
    }

    if (isModule) {
      exports[fileObj.name] = require('./' + fileObj.name);
    }
  });
};

exports.import(__dirname);
