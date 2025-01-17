import express from "express";
import morgan from "morgan";
import productsRouter from './routes/products.routes.js';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/groceries/products',productsRouter);

export default app;