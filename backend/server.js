import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import reviewRouter from './routes/reviewsRoute.js';
import orderRouter from './routes/ordersRoute.js';

// app config
const app = express();
const port  = process.env.PORT || 5000;

connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/review', reviewRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.listen(port, () => console.log(`Server running on port ${port}`));