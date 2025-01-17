import Product from "../models/Product.js"
const productsDAO={};
productsDAO.getAll=async()=>{
    return await Product.find();
}

export default productsDAO;