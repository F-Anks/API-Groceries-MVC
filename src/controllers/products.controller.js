import productsDAO from "../dao/products.dao.js";
import Product from "../models/Product.js";
const productsController={};

productsController.getAll=(req, res)=>{
    //request is here from al DAO
    productsDAO.getAll()
    .then((products)=>{
        res.json({
            data:products
        })
    })
    .catch((error)=>{
        res.json({
            data:{
                'message': error
            }
        })
    });

};

productsController.getOne=(req,res)=>{
    productsDAO.getOne(req.params.barcode)
    .then((Product)=>{
        if(Product != null)
            res.json({
                data: Product
            });
        else
            res.json({
                data: {
                    message: "product not found"
                },
            });
    })

    .catch((error)=>{
        res.json({
            data:{
                message: error,
            }
        });
    })
};
export default productsController;