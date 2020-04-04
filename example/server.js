"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var RequestIndex_1 = __importDefault(require("../build/RequestIndex"));
var config_1 = __importDefault(require("../build/config"));
var app = express_1.default();
var mRequest = new RequestIndex_1.default(config_1.default);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(mRequest.request());
app.get('/order', function (req, res) {
    res.send('gotten');
});
app.get('/login', function (req, res) {
    res.send('login');
});
app.listen(4000, function () { console.log('listening'); });
