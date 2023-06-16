"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_model_1 = require("../models/schemas/product.model");
class ProductController {
    static async getcreatePage(req, res) {
        res.render('createProduct', { textproduct: false });
    }
    static async createProduct(req, res) {
        console.log(req.file.filename);
        try {
            const productSearch = await product_model_1.Product.findOne({ name: req.body.name });
            if (productSearch) {
                res.render("createProduct", { textproduct: true });
            }
            const productinfo = {
                name: req.body.name,
                price: req.body.price,
                producer: req.body.producer,
                avatar: req.file.filename
            };
            const ProductNew = new product_model_1.Product(productinfo);
            const product = await ProductNew.save();
            if (product) {
                res.redirect('/product/list');
            }
            else {
                res.render("error");
            }
        }
        catch (err) {
            res.render("error");
        }
    }
    static async listProduct(req, res) {
        try {
            let limit;
            let offset;
            if (!req.query.limit || !req.query.limit) {
                limit = 3;
                offset = 0;
            }
            else {
                limit = parseInt(req.query.limit);
                offset = parseInt(req.query.offset);
            }
            const products = await product_model_1.Product.find().limit(limit).skip(limit * offset);
            ;
            res.render("listProduct", { products: products });
        }
        catch (_a) {
            res.render("error");
        }
    }
    static async deleteProduct(req, res) {
        try {
            let id = req.query.id;
            if (id) {
                await product_model_1.Product.deleteOne({ _id: id });
                res.redirect('/product/list');
            }
            else {
                res.render("error");
            }
        }
        catch (err) {
            res.render("error");
        }
    }
    static async getUpdatePage(req, res) {
        try {
            let id = req.query.id;
            if (id) {
                let productSearch = await product_model_1.Product.findOne({ _id: id });
                res.render('updateProduct', { productSearch, textProduct: false });
            }
        }
        catch (err) {
            res.render('error');
        }
    }
    static async updateProduct(req, res) {
        try {
            const blogUpdate = {
                name: req.body.name,
                price: req.body.price,
                producer: req.body.producer,
                avatar: req.file.filename
            };
            await product_model_1.Product.updateOne({ _id: req.query.id }, blogUpdate);
            res.redirect('/product/list');
        }
        catch (err) {
            res.render('error');
        }
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map