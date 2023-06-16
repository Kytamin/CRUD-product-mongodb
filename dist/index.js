"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const product_router_1 = require("./src/routers/product.router");
const data_source_1 = require("./src/models/data-source");
const PORT = 3333;
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set('views', './src/views');
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(express_1.default.static('./src/public'));
data_source_1.Database
    .connectDB()
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));
app.use('/product', product_router_1.productRouter);
app.use(body_parser_1.default.json());
app.listen(PORT, () => {
    console.log("App running on port: " + PORT);
});
//# sourceMappingURL=index.js.map