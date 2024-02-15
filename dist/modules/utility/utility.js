"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestingLogFunction = void 0;
var glide_1 = require("@servicenow/glide");
var moment_1 = __importDefault(require("moment"));
function TestingLogFunction(dateValue, testValue) {
    var a = (0, moment_1.default)('2024-02-12');
    var b = a.clone().add(1, 'week');
    a.format();
    b.format();
    var c = (0, moment_1.default)(dateValue).isValid();
    glide_1.gs.addInfoMessage("testing123 > coming from our sdk test ".concat(testValue, " >> and now here's the date value from the todo ").concat(dateValue, " and the date value after moment format ").concat(c, " >> value of date a ").concat(a, " -- value of date b (should be a week later) ").concat(b));
}
exports.TestingLogFunction = TestingLogFunction;
