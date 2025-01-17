import {model, Schema} from "mongoose";

const productSchema = new Schema({
    Barcode:{
        require: true,
        unique: true,
        type: String
    },
    description: String,
    brand: Number,
    price: Number,
    cost: Number,
    expired_date: String,
    stock: Number
    
},{
    versionKey: false,
    timestamps: true
});

export default model('product', productSchema)