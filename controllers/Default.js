'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.itemsDELETE = function itemsDELETE (req, res, next, id) {
  Default.itemsDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.itemsGET = function itemsGET (req, res, next) {
  Default.itemsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.itemsPOST = function itemsPOST (req, res, next, value) {
  Default.itemsPOST(value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.itemsPUT = function itemsPUT (req, res, next, id, value) {
  Default.itemsPUT(id, value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
