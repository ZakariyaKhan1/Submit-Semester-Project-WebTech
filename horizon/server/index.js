import express from 'express';
import productsRouter from './routes/products.js';
import cors from 'cors';
import { connection } from './db/connection.js';
import signupRouter from './routes/user.js';
import cookieParser from 'cookie-parser';


const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use('/user', signupRouter);

connection
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log('Error:', err);
  });

app.use('/products', productsRouter);
// app.use('/products/:_id', productsRouter);


app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
    