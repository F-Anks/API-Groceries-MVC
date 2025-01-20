import { model, Schema } from 'mongoose';

const employeeSchema = new Schema({
    employee_number: {
        require: true,
        unique: true,
        type: String
    },
    name: String,
    lastname: String,
    age: Number,
    email: String,
    salary: Number
},{
    versionKey: false,
    timestamps: true
});

export default model('employee', employeeSchema);