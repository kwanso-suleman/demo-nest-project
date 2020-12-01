"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoModule = void 0;
var common_1 = require("@nestjs/common");
var database_module_1 = require("../dbConnection/database.module");
var photo_provider_1 = require("./photo.provider");
var photo_service_1 = require("./photo.service");
var PhotoModule = /** @class */ (function () {
    function PhotoModule() {
    }
    PhotoModule = __decorate([
        common_1.Module({
            imports: [database_module_1.DatabaseModule],
            providers: __spreadArrays(photo_provider_1.photoProviders, [photo_service_1.PhotoService]),
        })
    ], PhotoModule);
    return PhotoModule;
}());
exports.PhotoModule = PhotoModule;
//# sourceMappingURL=photo.module.js.map