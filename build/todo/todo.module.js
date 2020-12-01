"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModule = void 0;
var common_1 = require("@nestjs/common");
var common_module_1 = require("../common/common.module");
var todo_controller_1 = require("./todo.controller");
var todo_service_1 = require("./todo.service");
var TodoModule = /** @class */ (function () {
    function TodoModule() {
    }
    TodoModule = __decorate([
        common_1.Module({
            imports: [common_module_1.CommonModule],
            providers: [todo_service_1.TodoService],
            controllers: [todo_controller_1.TodoController],
        })
    ], TodoModule);
    return TodoModule;
}());
exports.TodoModule = TodoModule;
//# sourceMappingURL=todo.module.js.map