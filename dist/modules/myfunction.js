"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showUpdate = void 0;
var utility_js_1 = require("./utility/utility.js");
var moment_1 = __importDefault(require("moment"));
function showUpdate(current, _prev) {
    var a = (0, moment_1.default)('2024-02-12');
    var b = a.clone().add(1, 'week');
    a.format();
    b.format();
    (0, utility_js_1.TestingLogFunction)(current.getValue('test_field'), current.getValue('deadline'));
}
exports.showUpdate = showUpdate;
