"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.productRouter = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const product_controller_1 = require("../controllers/product.controller");
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/upload');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
exports.productRouter.get('/create', product_controller_1.ProductController.getcreatePage);
exports.productRouter.post('/create', upload.single('avatar'), product_controller_1.ProductController.createProduct);
exports.productRouter.get('/list', product_controller_1.ProductController.listProduct);
exports.productRouter.get('/delete', product_controller_1.ProductController.deleteProduct);
exports.productRouter.get('/update', product_controller_1.ProductController.getUpdatePage);
exports.productRouter.post('/update', upload.single('avatar'), product_controller_1.ProductController.updateProduct);
//# sourceMappingURL=product.router.js.map