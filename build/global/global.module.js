"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalModule = void 0;
var common_1 = require("@nestjs/common");
var global_controller_1 = require("./global.controller");
var global_service_1 = require("./global.service");
var GlobalModule = /** @class */ (function () {
    function GlobalModule() {
    }
    GlobalModule = __decorate([
        common_1.Global(),
        common_1.Module({
            controllers: [global_controller_1.GlobalController],
            providers: [global_service_1.GlobalService],
            exports: [global_service_1.GlobalService],
        })
    ], GlobalModule);
    return GlobalModule;
}());
exports.GlobalModule = GlobalModule;
//# sourceMappingURL=global.module.js.map