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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCustomerRepository = void 0;
var pg_1 = require("pg");
var logger_1 = __importDefault(require("../loaders/logger"));
var CompanyCustomerRepository = /** @class */ (function () {
    function CompanyCustomerRepository() {
        this.compCustomers = [];
        this.pool = new pg_1.Pool({
            "host": process.env.DB_HOST,
            "port": Number(process.env.DB_PORT),
            "user": process.env.DB_USER,
            "password": process.env.DB_PASSWORD,
            "database": process.env.DB_DATABASE
        });
    }
    CompanyCustomerRepository.prototype.deleteCompCustomer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 2, 3]);
                        return [4 /*yield*/, this.pool.query('delete from CompanyCustomer where id = $1', [id])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2: return [7 /*endfinally*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CompanyCustomerRepository.prototype.getAllCompCustomers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _loop_1, this_1, _i, _a, item;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, , 6, 7]);
                        this.compCustomers = [];
                        return [4 /*yield*/, this.pool.query('select id,name, uid, town, plz, street, country from CompanyCustomer')];
                    case 1:
                        result = _b.sent();
                        _loop_1 = function (item) {
                            var shipingAddressesToAdd, addresses, contactPersonsToAdd, contactPersons;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        shipingAddressesToAdd = [];
                                        return [4 /*yield*/, this_1.pool.query('select id, companyCustomerID, adress from Address where companyCustomerID = $1', [
                                                item.id
                                            ])];
                                    case 1:
                                        addresses = _a.sent();
                                        addresses.rows.forEach(function (element) {
                                            shipingAddressesToAdd.push({ adress: element.adress });
                                        });
                                        contactPersonsToAdd = [];
                                        return [4 /*yield*/, this_1.pool.query('select companyCustomerID,adress, phoneNumber, email, companyRank, firstName, lastName, gender from ContactPerson where companyCustomerID = $1', [
                                                item.id
                                            ])];
                                    case 2:
                                        contactPersons = _a.sent();
                                        contactPersons.rows.forEach(function (element) {
                                            contactPersonsToAdd.push({
                                                id: element.id,
                                                adress: element.adress,
                                                phoneNumber: element.phoneNumber,
                                                companyRank: element.companyRank,
                                                email: element.email,
                                                fName: element.firstName,
                                                lName: element.lastName,
                                                gender: element.gender
                                            });
                                        });
                                        this_1.compCustomers.push({
                                            id: item.id,
                                            name: item.name,
                                            uid: item.uid,
                                            companyLocation: {
                                                town: item.town,
                                                plz: item.plz,
                                                street: item.street,
                                                country: item.country
                                            },
                                            shippingAdress: shipingAddressesToAdd,
                                            contactPersons: contactPersonsToAdd
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _a = result.rows;
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        item = _a[_i];
                        return [5 /*yield**/, _loop_1(item)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        logger_1.default.log('info', this.compCustomers);
                        return [3 /*break*/, 7];
                    case 6: return [2 /*return*/, this.compCustomers];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    CompanyCustomerRepository.prototype.addCompanyCustomer = function (compCustomer) {
        return __awaiter(this, void 0, void 0, function () {
            var insertId, _i, _a, item, _b, _c, item, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 11, 12, 13]);
                        return [4 /*yield*/, this.pool.query('insert into CompanyCustomer (name, uid, town, plz, street, country) values($1,$2,$3,$4,$5,$6)', [
                                compCustomer.name,
                                compCustomer.uid,
                                compCustomer.companyLocation.town,
                                compCustomer.companyLocation.plz,
                                compCustomer.companyLocation.street,
                                compCustomer.companyLocation.country
                            ])];
                    case 1:
                        _e.sent();
                        return [4 /*yield*/, this.pool.query('SELECT LASTVAL()')];
                    case 2:
                        insertId = _e.sent();
                        _i = 0, _a = compCustomer.shippingAdress;
                        _e.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        item = _a[_i];
                        return [4 /*yield*/, this.pool.query('insert into Address (companyCustomerID, adress) values($1,$2)', [
                                insertId.rows[0].lastval,
                                item.adress
                            ])];
                    case 4:
                        _e.sent();
                        _e.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        _b = 0, _c = compCustomer.contactPersons;
                        _e.label = 7;
                    case 7:
                        if (!(_b < _c.length)) return [3 /*break*/, 10];
                        item = _c[_b];
                        return [4 /*yield*/, this.pool.query('insert into ContactPerson (companyCustomerID,adress, phoneNumber, email, companyRank, firstName, lastName, gender) values($1,$2,$3,$4,$5,$6,$7,$8)', [
                                insertId.rows[0].lastval,
                                item.adress,
                                item.phoneNumber,
                                item.email,
                                item.companyRank,
                                item.fName,
                                item.lName,
                                item.gender
                            ])];
                    case 8:
                        _e.sent();
                        _e.label = 9;
                    case 9:
                        _b++;
                        return [3 /*break*/, 7];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        _d = _e.sent();
                        return [2 /*return*/, false];
                    case 12: return [2 /*return*/, true];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    return CompanyCustomerRepository;
}());
exports.CompanyCustomerRepository = CompanyCustomerRepository;
