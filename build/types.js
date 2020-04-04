"use strict";
/*  string,
   number,
   currency,
   email,
   boolean,
   float,
   array,
   */
Object.defineProperty(exports, "__esModule", { value: true });
var pattern = '';
function isString(arg) {
    return /^([a-z\s\d/$])+$/i.test(arg);
}
exports.isString = isString;
function isNumber(arg) {
    return /(^[\d])$/i.test(arg);
}
exports.isNumber = isNumber;
function isEmail(arg) {
    return /^([a-z\d])+@([a-z])+(.com)$/i.test(arg);
}
exports.isEmail = isEmail;
function isBool(arg) {
    return /^(true)|(false)$/i.test(arg);
}
exports.isBool = isBool;
function isFloat(arg) {
    return /^([\d])+.([\d])+$/i.test(arg);
}
exports.isFloat = isFloat;
function isDate(arg) {
    return /^([\d]{1,2})\/([\d]{1,2})\/([\d]{4})$/i.test(arg);
}
exports.isDate = isDate;
