"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    static async connectDB() {
        const urldb = "mongodb://127.0.0.1:27017/productsmanager";
        return await mongoose_1.default.connect(urldb);
    }
}
exports.Database = Database;
//# sourceMappingURL=data-source.js.map