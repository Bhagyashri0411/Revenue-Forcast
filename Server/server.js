import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./Dataimport.js"
import { errorHandler, notFound } from "./Middleware/Error.js";
import userRoute from "./Routes/UserRoutes.js";
import cors from "cors"
// import multer from "multer";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json())

// API
app.use("/api/import", ImportData)
app.use("/api/users", userRoute);

app.use(cors());

app.use(notFound);
app.use(errorHandler)

app.get("/", (req, res) => {
    res.send("Api is running.......")
})


const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log("Server Running.... "));