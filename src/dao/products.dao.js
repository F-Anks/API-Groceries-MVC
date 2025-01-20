import Product from "../models/Product.js"
const productsDAO={};
productsDAO.getAll=async()=>{
    return await Product.find();
};
productsDAO.getOne=async(barcode)=>{
    return await Product.findOne({Barcode: barcode});
}

export default productsDAO;