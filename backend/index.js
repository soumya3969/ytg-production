import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// // * For testing server
// app.get('/',(req,res)=>{
//     res.send('api is working')
// })

// * DataBase Connect:
mongoose.set('strictQuery',false)
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('MongoDb Database Connected')
    }catch(err){
        console.log('MongoDB Database connection Failed',err)
    }
}

// *Middleware:
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(port, () => {
    connect()
  console.log("server listening on port", port);
});
