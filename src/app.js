import express from "express";
import morgan from "morgan";
import productsRouter from './routes/products.routes.js';
import employeesRouter from "./routes/employees.routes.js";
import customersRouter from "./routes/customers.router.js";

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/groceries/products',productsRouter);
app.use("/groceries/employees", employeesRouter);
app.use("/groceries/customers", customersRouter);

export default app;