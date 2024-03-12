"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestingLogFunction = void 0;
var glide_1 = require("@servicenow/glide");
function TestingLogFunction(testValue, dateValue) {
    glide_1.gs.addInfoMessage("testValue: ".concat(testValue, ", dateValue: ").concat(dateValue));
}
exports.TestingLogFunction = TestingLogFunction;
