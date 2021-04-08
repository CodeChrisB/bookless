"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCustomerController = void 0;
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var CompanyCustomerController = /** @class */ (function () {
    function CompanyCustomerController(companyCustomerService) {
        this.companyCustomerService = companyCustomerService;
    }
    CompanyCustomerController.prototype.GetAllCustomers = function (req) {
        // Get Data from customerService
        return this.companyCustomerService.getAllCompanyCustomers();
    };
    CompanyCustomerController.prototype.Get = function (req) {
        return "PrivateCustomerController works!!";
    };
    CompanyCustomerController.prototype.delete = function (id, res) {
        return this.companyCustomerService.deleteCompanyCustomer(id);
    };
    CompanyCustomerController.prototype.add = function (req, res) {
        return this.companyCustomerService.add(req.body);
    };
    __decorate([
        inversify_express_utils_1.httpGet("/all")
    ], CompanyCustomerController.prototype, "GetAllCustomers", null);
    __decorate([
        inversify_express_utils_1.httpGet("/")
    ], CompanyCustomerController.prototype, "Get", null);
    __decorate([
        inversify_express_utils_1.httpDelete("/:id"),
        __param(0, inversify_express_utils_1.requestParam("id")), __param(1, inversify_express_utils_1.response())
    ], CompanyCustomerController.prototype, "delete", null);
    __decorate([
        inversify_express_utils_1.httpPost("/add")
    ], CompanyCustomerController.prototype, "add", null);
    CompanyCustomerController = __decorate([
        inversify_express_utils_1.controller("/CompanyCustomer"),
        __param(0, inversify_1.inject("CompanyCustomerService"))
    ], CompanyCustomerController);
    return CompanyCustomerController;
}());
exports.CompanyCustomerController = CompanyCustomerController;
