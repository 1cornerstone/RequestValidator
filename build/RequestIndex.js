"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeValidator_1 = require("./typeValidator");
var RequestIndex = /** @class */ (function () {
    function RequestIndex(_routeObject) {
        this.routeObject = _routeObject;
    }
    RequestIndex.prototype.request = function () {
        var _routeObj = this.routeObject;
        var _validate = this.validation;
        return function request(req, res, next) {
            _validate(req, res, next, _routeObj);
        };
    };
    RequestIndex.prototype.validation = function (request, response, next, routeObject) {
        var _errorOccur = true;
        // @ts-ignore
        if (routeObject[request.url] != undefined) {
            // @ts-ignore
            var _object = routeObject[request.url];
            for (var property in _object) {
                if (request.body[property] == undefined) {
                    _errorOccur = false;
                    // @ts-ignore
                    return response.status(400).send(error(property, _object[property]));
                }
            }
            for (var props in _object) {
                // @ts-ignore
                if (!checkTypes(_object[props].type, request.body[props])) {
                    _errorOccur = false;
                    // @ts-ignore
                    return response.send(error(props, _object[props]));
                }
                // @ts-ignore
                if (_object[props].min != undefined) {
                    var values = request.body[props];
                    // @ts-ignore
                    if (parseInt(_object[props].min) > values.length) {
                        _errorOccur = false;
                        // @ts-ignore
                        return response.send(error(props + " min value", _object[props]));
                    }
                }
                // @ts-ignore
                if (_object[props].max != undefined) {
                    var values = request.body[props];
                    // @ts-ignore
                    if (parseInt(_object[props].max) < values.length) {
                        _errorOccur = false;
                        // @ts-ignore
                        return response.send(error(props + " max value", _object[props]));
                    }
                }
            }
        }
        function checkTypes(arg, val) {
            var result;
            switch (arg.toLowerCase()) {
                case 'string':
                    result = typeValidator_1.isString(val);
                    break;
                case 'email':
                    result = typeValidator_1.isEmail(val);
                    break;
                case 'number':
                    result = typeValidator_1.isNumber(val);
                    break;
                case 'boolean':
                    result = typeValidator_1.isBool(val);
                    break;
                case 'float':
                    result = typeValidator_1.isFloat(val);
                    break;
                case 'date':
                    result = typeValidator_1.isDate(val);
                    break;
                default: result = false;
            }
            return result;
        }
        function error(field, fieldProps) {
            return {
                message: 'Request body is syntactically invalid',
                errors: __assign({ "property": " " + field + " property not satisfied" }, fieldProps)
            };
        }
        if (_errorOccur) {
            next();
        }
    };
    return RequestIndex;
}());
exports.default = RequestIndex;
