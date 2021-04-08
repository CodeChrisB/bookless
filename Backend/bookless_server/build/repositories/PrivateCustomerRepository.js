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
        while (_) try {
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateCustomerRepository = void 0;
var console_1 = require("console");
var pg_1 = require("pg");
var logger_1 = __importDefault(require("../loaders/logger"));
var PrivateCustomerRepository = /** @class */ (function () {
    function PrivateCustomerRepository() {
        this.pool = new pg_1.Pool({
            "host": process.env.DB_HOST,
            "port": Number(process.env.DB_PORT),
            "user": process.env.DB_USER,
            "password": process.env.DB_PASSWORD,
            "database": process.env.DB_DATABASE
        });
        this.privateCustomers = [];
    }
    PrivateCustomerRepository.prototype.get = function () {
        logger_1.default.info(this.privateCustomers);
        return this.privateCustomers;
    };
    PrivateCustomerRepository.prototype.updatePrivateCustomer = function (privateCustomer) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.pool.query("update privateCustomer set adress=$1, phonenumber=$2, email=$3, fname=$4, lname=$5, gender=$6 where id=$7", [
                                privateCustomer.adress,
                                privateCustomer.phoneNumber,
                                privateCustomer.email,
                                privateCustomer.fName,
                                privateCustomer.lName,
                                privateCustomer.gender,
                                privateCustomer.id,
                            ])];
                    case 1:
                        _b.sent();
                        logger_1.default.info('PrivateCustomer' + privateCustomer.id + 'updated!');
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/, true];
                }
            });
        });
    };
    PrivateCustomerRepository.prototype.getPrivateCustomer = function () {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var result, _b, _c, row, e_1_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 14, , 15]);
                        this.privateCustomers = [];
                        return [4 /*yield*/, this.pool.query("select id, adress,phonenumber,email,fname,lname,gender from PrivateCustomer")];
                    case 1:
                        result = _e.sent();
                        logger_1.default.info('Get privateCustomers from DB');
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 7, 8, 13]);
                        _b = __asyncValues(result.rows);
                        _e.label = 3;
                    case 3: return [4 /*yield*/, _b.next()];
                    case 4:
                        if (!(_c = _e.sent(), !_c.done)) return [3 /*break*/, 6];
                        row = _c.value;
                        this.privateCustomers.push({
                            id: row.id,
                            adress: row.adress,
                            phoneNumber: row.phonenumber,
                            email: row.email,
                            fName: row.fname,
                            lName: row.lname,
                            gender: row.gender,
                        });
                        _e.label = 5;
                    case 5: return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _e.trys.push([8, , 11, 12]);
                        if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _a.call(_b)];
                    case 9:
                        _e.sent();
                        _e.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13:
                        logger_1.default.info(this.privateCustomers[0].phoneNumber);
                        return [2 /*return*/, this.privateCustomers];
                    case 14:
                        _d = _e.sent();
                        return [2 /*return*/, []];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    PrivateCustomerRepository.prototype.deletePrivateCustomer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 2, 3]);
                        this.privateCustomers.splice(this.privateCustomers.findIndex(function (v) { return v.id === id; }), 1);
                        return [4 /*yield*/, this.pool.query('delete from privateCustomer where id = $1', [id])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2: return [7 /*endfinally*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PrivateCustomerRepository.prototype.addPrivateCustomer = function (privateCustomer) {
        return __awaiter(this, void 0, void 0, function () {
            var ret, result, insertId, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        ret = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.pool.query('insert into PrivateCustomer (adress,phoneNumber,email,fName,lName,gender ) values($1, $2, $3, $4, $5,$6)', [
                                privateCustomer.adress,
                                privateCustomer.phoneNumber,
                                privateCustomer.email,
                                privateCustomer.fName,
                                privateCustomer.lName,
                                privateCustomer.gender
                            ])];
                    case 2:
                        result = _b.sent();
                        return [4 /*yield*/, this.pool.query('select id, fname, lname from privateCustomer')];
                    case 3:
                        insertId = _b.sent();
                        logger_1.default.info(insertId.rows[0].fname);
                        return [2 /*return*/, true];
                    case 4:
                        _a = _b.sent();
                        throw console_1.exception("Insert failed");
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return PrivateCustomerRepository;
}());
exports.PrivateCustomerRepository = PrivateCustomerRepository;
