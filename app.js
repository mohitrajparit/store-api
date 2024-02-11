require('dotenv').config();
require('express-async-errors');
const express=require('express');
const app=express();
const connectDB=require('./db/connect');
const productRoute=require('./routes/products');

const notFoundMiddleWare=require('./middleware/not-found');
const errorHandlerMiddleware=require('./middleware/error-handler')

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('<h1>Store APi</h1><a href="/api/v1/products">Products</a>')
})
app.use('/api/v1/products',productRoute);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);
const port=process.env.PORT||5000;
const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`App is listening at port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
    
}
start();