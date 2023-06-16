import mongoose from "mongoose";
 export class Database{
       static async connectDB(){
           const urldb="mongodb://127.0.0.1:27017/productsmanager"
           return await mongoose.connect(urldb)
       }
}