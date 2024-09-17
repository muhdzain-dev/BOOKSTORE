import express, { response } from "express";
import { PORT, MONGO_DB_URL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();

// Middle ware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY

//option 01 => allow all origins with default of cors(*)
app.use(cors());

// option 01 => allow custom cors
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (request, response) => {
  return response.status(234).send("Welcome to Mern Stack");
});

app.use("/books", bookRoute);

mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
