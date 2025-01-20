import Customer from "../models/Customer.js";

const customersDao = {};

customersDao.getAll = async () => {
    return await Customer.find();
}

export default customersDao;