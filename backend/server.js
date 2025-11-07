import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { config } from "./config/config.js";
import stockRoutes from "./routes/stockRoutes.js";
import { errorMiddleware } from "./utils/errorHandler.js";


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/stocks", stockRoutes);


app.use(errorMiddleware);


app.listen(config.port, () => console.log(`API running on :${config.port}`));