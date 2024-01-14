import mongoose from "mongoose";

const productSchema =  mongoose.Schema({
    id:{ type: Number, unique: true },
    title:String,
    price:Number,
    category:String,
    discription:String,
    image: String
})

const productModel=mongoose.model('product',productSchema)

export {productModel}