import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { productRouter } from "./src/routers/product.router"
import { Database } from "./src/models/data-source";
const PORT = 3333;
const app = express();
app.set("view engine", "ejs");
app.set('views', './src/views');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static( './src/public'));
Database
.connectDB()
.then(() => console.log('DB Connected!'))

.catch(error => console.log('DB connection error:', error.message));
app.use('/product',productRouter)
app.use(bodyParser.json());
app.listen(PORT, () => {

    console.log("App running on port: " + PORT)
   
})