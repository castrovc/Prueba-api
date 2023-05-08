"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("../controllers/user.controller"));
var router = (0, express_1.Router)();
var user = user_controller_1.default;
router.post("/", user.createUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map