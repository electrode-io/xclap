"use strict";

const xrun = require("@xarc/run/cli/xrun");

module.exports = function(a, b) {
  return xrun(a, b, true);
};
