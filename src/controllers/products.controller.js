import productsDao from '../dao/products.dao.js';
const productsController = {};

productsController.getAll = (req, res) => {
    productsDao.getAll()
        .then((products) => {
            res.json({
                data: products
            });
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message || 'Some error occurred while retrieving products.'
                }
            });
        });
};

productsController.getOne = (req, res) => {
    productsDao.getOne(req.params.barcode)
        .then((product) => {
            if (product) {
                res.json({ data: product });
            } else { 
                res.json({ data: { message: `Product with barcode ${req.params.barcode} not found` } });
            }
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message || 'Some error occurred while retrieving product.'
                }
            });
        });
};

productsController.insert = (req, res) => {
    productsDao.insert(req.body)
        .then((response) => {
            res.json({ mesage: 'Product inserted successfully', product: response });
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message || 'Some error occurred while inserting product.'
                }
            });
        });
};

productsController.updateOne = (req, res) => {
    productsDao.updateOne(req.body, req.params.barcode)
        .then((result) => {
            res.json({
            data: {
                message: 'Product updated successfully',
                result: result
            }
        })
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message || 'Some error occurred while updating product.'
                }
            });
        });
};

productsController.deleteOne = (req, res) => {
    productsDao.deleteOne(req.params.barcode)
        .then((productDeleted) => {
            res.json({
                data: {
                    message: 'Product deleted successfully',
                    product_deleted: productDeleted
                }
            });
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message || 'Some error occurred while deleting product.'
                }
            });
        });
}

export default productsController;