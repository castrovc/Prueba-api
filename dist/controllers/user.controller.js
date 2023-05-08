"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_source_1 = require("../data-source");
var User_1 = require("../models/User");
var userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
var UserController = /** @class */ (function () {
    function UserController() {
    }
    var _a;
    _a = UserController;
    UserController.createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _b, name, age, user, error_1;
        return __generator(_a, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = req.body, name = _b.name, age = _b.age;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    user = new User_1.User();
                    user.name = name;
                    user.age = age;
                    return [4 /*yield*/, userRepository.save(user)];
                case 2:
                    _c.sent();
                    return [2 /*return*/, res.json({
                            ok: true,
                            msg: "user was save",
                        })];
                case 3:
                    error_1 = _c.sent();
                    return [2 /*return*/, res.json({
                            ok: false,
                            msg: "Error -> ".concat(error_1),
                        })];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    UserController.getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var users, error_2;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userRepository.find()];
                case 1:
                    users = _b.sent();
                    return [2 /*return*/, users.length > 0 ? res.json({ ok: true, users: users }) :
                            res.json({ ok: false, msg: "user not found" })];
                case 2:
                    error_2 = _b.sent();
                    return [2 /*return*/, res.json({
                            ok: false,
                            msg: "Error => ".concat(error_2)
                        })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    UserController.getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, user, error_3;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    id = parseInt(req.params.id);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOne({
                            where: { id: id },
                        })];
                case 2:
                    user = _b.sent();
                    return [2 /*return*/, user ? res.json({ ok: true, user: user }) :
                            res.json({ ok: false, msg: "user not found" })];
                case 3:
                    error_3 = _b.sent();
                    return [2 /*return*/, res.json({
                            ok: false,
                            msg: "Error => ".concat(error_3)
                        })];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    //update
    UserController.updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, _b, name, age, repoUser, user, error_4;
        return __generator(_a, function (_c) {
            switch (_c.label) {
                case 0:
                    id = parseInt(req.params.id);
                    _b = req.body, name = _b.name, age = _b.age;
                    repoUser = data_source_1.AppDataSource.getRepository(User_1.User);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, repoUser.findOneOrFail({
                            where: { id: id, state: true },
                        })];
                case 2:
                    user = _c.sent();
                    if (!user) {
                        throw new Error("User dont exist in data base");
                    }
                    user.name = name,
                        user.age = age;
                    return [4 /*yield*/, repoUser.save(user)];
                case 3:
                    _c.sent();
                    return [2 /*return*/, res.json({
                            ok: true,
                            msg: "User was update"
                        })];
                case 4:
                    error_4 = _c.sent();
                    return [2 /*return*/, res.json({
                            ok: false,
                            msg: "Server error",
                        })];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    //delete
    UserController.deleteUser = function (res, req) { return __awaiter(void 0, void 0, void 0, function () {
        var id, repoUser, user, e_1;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    id = parseInt(req.params.id);
                    repoUser = data_source_1.AppDataSource.getRepository(User_1.User);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, repoUser.findOne({
                            where: { id: id },
                        })];
                case 2:
                    user = _b.sent();
                    console.log(user);
                    if (!user) {
                        throw new Error("User dont exist in data base");
                    }
                    user.state = false;
                    return [4 /*yield*/, repoUser.save(user)];
                case 3:
                    _b.sent();
                    return [2 /*return*/, res.json({
                            ok: true,
                            msg: "User was delete",
                        })];
                case 4:
                    e_1 = _b.sent();
                    return [2 /*return*/, res.json({
                            ok: false,
                            msg: "Server error"
                        })];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return UserController;
}());
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map