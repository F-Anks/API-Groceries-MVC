import customersDao from "../dao/customers.dao.js";
const customersController = {};

customersController.getAll = (req, res) => {
    customersDao.getAll()
        .then((customers) =>
            res.json({
                data: customers
            }))
        .catch((error) =>
            res.json({
                data: {
                    "message": (error)
                }
            })
        );
}

export default customersController;