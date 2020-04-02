"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var RequestIndex_1 = __importDefault(require("./RequestIndex"));
var config_1 = __importDefault(require("./config"));
var app = express_1.default();
var mRequest = new RequestIndex_1.default(config_1.default);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: false
}));
app.use(mRequest.request());
app.get('/', function (req, res) {
    res.send('gotten');
});
app.get('/login', function (req, res) {
    res.send('login');
});
app.listen(4000, function () { console.log('listening'); });
