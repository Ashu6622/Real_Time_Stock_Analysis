import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import stockRoutes from "./routes/stockRoutes.js";
import { errorMiddleware } from "./utils/errorHandler.js";


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/stocks", stockRoutes);


app.use(errorMiddleware);


app.listen(process.env.PORT, (error) =>{
    if(error){
        process.exit(1);
    }
    console.log(`API running on :${process.env.PORT}`);
})