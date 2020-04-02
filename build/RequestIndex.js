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
// rate limit here
// console.log(req.body);
// console.log(req.url);
var RequestIndex = /** @class */ (function () {
    function RequestIndex(_routeObject) {
        this.routeObject = _routeObject;
    }
    RequestIndex.prototype.request = function () {
        var _routeObj = this.routeObject;
        var _validate = this.validation;
        return function request(req, res, next) {
            /*
            * get the url
            * get the property that match the url
            * compare
            * */
            _validate(req, res, _routeObj);
            // next();
        };
    };
    RequestIndex.prototype.getProperty = function (request, response, routeObject) {
        if (routeObject[request.url] != undefined) {
            var _object = routeObject[request.url];
            for (var property in _object) {
                if (request.body[property] == undefined) {
                    return response.status(400).send(error(property, _object[property]));
                }
                //console.log(`set ${property} property  ${request.body[property]} ` )
                // console.log(routeObject[request.url][property])
            }
        }
        function error(field, fieldProps) {
            return {
                message: 'Request body is syntactically invalid',
                errors: __assign({ "property": " " + field + " property not obeyed" }, fieldProps)
            };
        }
    };
    RequestIndex.prototype.validation = function (request, response, routeObject) {
        RequestIndex.prototype.getProperty(request, response, routeObject);
    };
    return RequestIndex;
}());
exports.default = RequestIndex;
