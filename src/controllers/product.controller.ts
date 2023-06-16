import { log } from "console";
import { Product } from "../models/schemas/product.model";


export class ProductController {

    static async getcreatePage(req, res) {
        res.render('createProduct', { textproduct: false })
    }
    static async createProduct(req, res) {
        console.log(req.file.filename)
        try {
            const productSearch = await Product.findOne({ name: req.body.name })
            if (productSearch) {
                res.render("createProduct", { textproduct: true })
            }
            const productinfo = {
                name: req.body.name,
                price: req.body.price,
                producer: req.body.producer,
                avatar: req.file.filename
            }
            const ProductNew = new Product(productinfo);
            const product = await ProductNew.save();
            if (product) {
                res.redirect('/product/list');
            } else {

                res.render("error");

            }

        } catch (err) {

            res.render("error");

        }

    }
    static async listProduct(req, res) {
        try {

            let limit: number;
           
            let offset: number;
           
            if(!req.query.limit || !req.query.limit) {
           
            limit = 3;
           
            offset = 0;
           
            } else {
           
            limit = parseInt(req.query.limit as string);
           
            offset = parseInt(req.query.offset as string);
           
            }
           
            const products = await Product.find().limit(limit).skip(limit*offset);;
           
            res.render("listProduct", { products: products });
           
            } catch {
           
            res.render("error");
           
            }

    }
    static async deleteProduct(req, res) {
        try {
            let id = req.query.id
            if (id) {
                await Product.deleteOne({ _id: id });
                res.redirect('/product/list')
            } else {
                res.render("error");
            }
        } catch (err) {

            res.render("error");

        }
    }
    static async getUpdatePage(req, res) {
        try {
            let id = req.query.id
            if (id) {
                let productSearch = await Product.findOne({ _id: id })
                res.render('updateProduct', { productSearch, textProduct: false })
            }
        } catch (err) {
            res.render('error')
        }
    }
    static async updateProduct(req, res) {
        try{
            const blogUpdate = {
                name: req.body.name,
                price: req.body.price,
                producer: req.body.producer,
                avatar: req.file.filename
            }
            await Product.updateOne({ _id: req.query.id }, blogUpdate)
            res.redirect('/product/list')
        }catch(err){
            res.render('error')
        }
    }
}