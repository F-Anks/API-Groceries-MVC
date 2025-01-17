import productsDAO from "../dao/products.dao.js";
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

export default productsController;