import Employee from "../models/Employee.js";

const employeesDao = {};

employeesDao.getAll = async () => {
    return await Employee.find();
}
employeesDao.getOne = async (employee_number) => {
    return await Employee.findOne({employee_number: employee_number});
}
export default employeesDao;