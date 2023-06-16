import express from "express";
export const  productRouter=express.Router()
import multer from 'multer';
import { ProductController } from "../controllers/product.controller";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/upload');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });
productRouter.get('/create',ProductController.getcreatePage)
productRouter.post('/create',upload.single('avatar'),ProductController.createProduct)
productRouter.get('/list',ProductController.listProduct)
productRouter.get('/delete',ProductController.deleteProduct)
productRouter.get('/update',ProductController.getUpdatePage)
productRouter.post('/update',upload.single('avatar'),ProductController.updateProduct)