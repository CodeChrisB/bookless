"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
var inversify_express_utils_1 = require("inversify-express-utils");
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    HomeController.prototype.get = function (req) {
        return 'Bookless DB';
    };
    __decorate([
        inversify_express_utils_1.httpGet('/')
    ], HomeController.prototype, "get", null);
    HomeController = __decorate([
        inversify_express_utils_1.controller('/')
    ], HomeController);
    return HomeController;
}());
exports.HomeController = HomeController;
