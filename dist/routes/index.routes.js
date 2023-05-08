"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = require("express");
//importar entidades
var user_routes_1 = __importDefault(require("./user.routes"));
dotenv_1.default.config();
var URL = process.env.URL;
var router = (0, express_1.Router)();
//rutas
router.use("".concat(URL, "/user"), user_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.routes.js.map