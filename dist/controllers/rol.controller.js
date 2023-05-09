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
var Rol_1 = require("../models/Rol");
var rolRepository = data_source_1.AppDataSource.getRepository(Rol_1.Rol);
var RolController = /** @class */ (function () {
    function RolController() {
    }
    var _a;
    _a = RolController;
    RolController.createRol = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _b, type, description, rol, error_1;
        return __generator(_a, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = req.body, type = _b.type, description = _b.description;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    rol = new Rol_1.Rol();
                    rol.type = type;
                    rol.description = description;
                    return [4 /*yield*/, rolRepository.save(rol)];
                case 2:
                    _c.sent();
                    return [2 /*return*/, res.json({
                            ok: true,
                            msg: "rol was save",
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
    RolController.getRoles = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var roles, error_2;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, rolRepository.find()];
                case 1:
                    roles = _b.sent();
                    return [2 /*return*/, roles.length > 0
                            ? res.json({ ok: true, roles: roles })
                            : res.json({ ok: false, msg: "rol not found" })];
                case 2:
                    error_2 = _b.sent();
                    return [2 /*return*/, res.json({
                            ok: false,
                            msg: "Error -> ".concat(error_2),
                        })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    RolController.getRol = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, rol, error_3;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    id = parseInt(req.params.id);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, rolRepository.findOne({
                            where: { id: id },
                        })];
                case 2:
                    rol = _b.sent();
                    return [2 /*return*/, rol
                            ? res.json({ ok: true, rol: rol })
                            : res.json({ ok: false, msg: "rol not found" })];
                case 3:
                    error_3 = _b.sent();
                    return [2 /*return*/, res.json({
                            ok: false,
                            msg: "Error -> ".concat(error_3),
                        })];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    //UPDATE
    RolController.updateRol = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, _b, type, description, repoRol, rol, error_4;
        return __generator(_a, function (_c) {
            switch (_c.label) {
                case 0:
                    id = parseInt(req.params.id);
                    _b = req.body, type = _b.type, description = _b.description;
                    repoRol = data_source_1.AppDataSource.getRepository(Rol_1.Rol);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, repoRol.findOneOrFail({
                            where: { id: id, state: true },
                        })];
                case 2:
                    rol = _c.sent();
                    if (!rol) {
                        throw new Error("Rol dont exist in data base");
                    }
                    rol.type = type, rol.description = description;
                    return [4 /*yield*/, repoRol.save(rol)];
                case 3:
                    _c.sent();
                    return [2 /*return*/, res.json({
                            ok: true,
                            msg: "Rol was update"
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
    RolController.deleteRol = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, repoRol, rol, e_1;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    id = parseInt(req.params.id);
                    repoRol = data_source_1.AppDataSource.getRepository(Rol_1.Rol);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, repoRol.findOne({
                            where: { id: id },
                        })];
                case 2:
                    rol = _b.sent();
                    console.log(rol);
                    if (!rol) {
                        throw new Error("Rol dont exist in data base");
                    }
                    rol.state = false;
                    return [4 /*yield*/, repoRol.save(rol)];
                case 3:
                    _b.sent();
                    return [2 /*return*/, res.json({
                            ok: true,
                            msg: "Rol was delete",
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
    return RolController;
}());
exports.default = RolController;
//# sourceMappingURL=rol.controller.js.map