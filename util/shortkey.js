'use strict';

var shortid = require('shortid');

module.exports = exports = function (len) {
  // var id = "";
  // var chars = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  //
  // for (var i = 0; i < len; i++) {
  //   id += chars.charAt(Math.floor(Math.random() * chars.length));
  // }
  //
  // return id;

  var id = shortid.generate();
  return (len) ? id.substr(0, len) : id;
};
