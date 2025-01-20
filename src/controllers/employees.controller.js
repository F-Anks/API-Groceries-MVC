import employeesDao from "../dao/employees.dao.js";
import Employee from "../models/Employee.js";
const employeesController = {};

employeesController.getAll = (req, res) => {
    employeesDao.getAll()
        .then((employees) =>
            res.json({
                data: employees
            }))
        .catch((error) => 
            res.json({
                data:{
                    "message": (error)
            }
        })
        );
}

employeesController.getOne=(req,res)=>{
    employeesDao.getOne(req.params.employee_number)
    .then((Employee)=>{
        if(Employee != null)
            res.json({
                data: Employee
            });
        else
            res.json({
                data: {
                    message: "employee not found"
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


export default employeesController;