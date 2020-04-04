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
        },
        password: {
            type: enumType_1.default.String,
            min: 5,
            max: 7
        },
    },
    '/accountBalance': {
        amount: { type: enumType_1.default.Number },
    },
    '/order': {
        item: {
            type: enumType_1.default.String
        },
        amount: {
            type: enumType_1.default.Float
        },
        date: {
            type: enumType_1.default.Date
        }
    }
};
exports.default = routeObject;
