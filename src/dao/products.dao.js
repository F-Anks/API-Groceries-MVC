import Product from '../models/Product.js';

const productDao = {};
productDao.getAll = async () => {
    return await Product.find();
}
productDao.getOne = async (barcode) => {
    return await Product.findOne({ barcode: barcode });
}
productDao.insert = async (product) => {
    return await Product.create(product);
}
productDao.updateOne = async (product,barcode) => {
    return await Product.findOneAndUpdate({ barcode: barcode }, product);	
}
productDao.deleteOne = async (barcode) => {
    return await Product.findOneAndDelete({barcode: barcode});
}

export default productDao;