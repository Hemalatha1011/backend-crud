import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dbConnection from "./src/configs/db.js";
import movieRoutes from "./src/routes/movieRoutes.js"
import dotenv from "dotenv"

dotenv.config();

//APP INITIALIZATION
const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 
app.use(cors());

//ROUTES
app.use("/movies", movieRoutes);

//DBCONNECTION
dbConnection();

app.listen(process.env.PORT, () =>
  console.log(`Listening at PORT ${process.env.PORT}`)
);