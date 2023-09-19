import express from "express";
const app = express();
import routes from "./routes/routes.js";
import { ConnectToMongoDB } from "./services/db.js";
import * as dotenv from "dotenv";
dotenv.config();

// db connection
ConnectToMongoDB(process.env.MONGO_CONNECTION);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("working on 5000");
});

app.use("/", routes);

// express server
const port = process.env.PORT || 5000; // Default to port 3000 if PORT environment variable is not set
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
