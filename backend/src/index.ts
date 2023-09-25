import express from "express";
const app = express();
import routes from "./routes/routes.js";
import userroutes from "./routes/userroutes.js";
import { ConnectToMongoDB } from "./services/db.js";
import * as dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
dotenv.config();
import passport from "passport";
import configurePassport from "./services/passportConfig.js";

//session
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    },
  })
);

// passport
app.use(passport.initialize());
app.use(passport.session());
configurePassport();

// Configure CORS to allow requests from your frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Replace with your frontend's URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable credentials (if needed)
  })
);

// db connection
ConnectToMongoDB(process.env.MONGO_CONNECTION);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("working on 5000");
});

app.use("/", routes);
app.use("/", userroutes);

// express server
const port = process.env.PORT || 5000; // Default to port 3000 if PORT environment variable is not set
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
