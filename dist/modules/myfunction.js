"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testFunction = void 0;
var utility_1 = require("./utility/utility");
var testFunction = function (current, _prev) {
    (0, utility_1.TestingLogFunction)(current.getValue('deadline'), current.getValue('test_field'));
};
exports.testFunction = testFunction;
