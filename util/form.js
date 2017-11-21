'use strict';

const _ = require('lodash');

exports.validate = function (postData, defaultData) {
  var resultData = _.chain(defaultData)
    .cloneDeep()
    .mapValues(function (v, k) {
      if (_.isString(v)) {
        return _.toString(postData[k]);
      }
      if (_.isNumber(v)) {
        return isNaN(_.toNumber(postData[k])) ? v : _.toNumber(postData[k]);
      }
      if (_.isInteger(v)) {
        return isNaN(_.toInteger(postData[k])) ? v : _.toInteger(postData[k]);
      }
      return postData[k];
    }).value();

  return resultData;
};
