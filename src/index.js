import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongoDB.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.routes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.text());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is Working");
});

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log("Listening to port - " + PORT);
  connectDB();
});
