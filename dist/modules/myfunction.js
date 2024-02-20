"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showUpdate = void 0;
var utility_js_1 = require("./utility/utility.js");
function showUpdate(current, _prev) {
    (0, utility_js_1.TestingLogFunction)(current.getValue('test_field'), current.getValue('deadline'));
}
exports.showUpdate = showUpdate;
