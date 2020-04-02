"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enumType_1 = __importDefault(require("./enumType"));
var routeObject = {
    '/login': {
        email: {
            type: enumType_1.default.Email,
            min: 3,
            max: 3
        },
        password: {
            type: enumType_1.default.String,
            min: 3,
            max: 8
        },
        username: {
            type: enumType_1.default.String,
        }
    },
    '/accountBalance': {
        value: enumType_1.default.Number,
    },
    'products': {
        item: enumType_1.default.Array
    },
    'order': {
        order: {
            amount: enumType_1.default.Float,
            date: enumType_1.default.Date
        }
    }
};
exports.default = routeObject;
