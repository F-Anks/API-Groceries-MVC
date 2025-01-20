import { model, Schema } from 'mongoose';

const customerSchema = new Schema({
    customer_number: {
        require: true,
        unique: true,
        type: String
    },
    name: String,
    lastname: String,
    age: Number,
    email: String,
    phone: String
},{
    versionKey: false,
    timestamps: true
});

export default model('customer', customerSchema);