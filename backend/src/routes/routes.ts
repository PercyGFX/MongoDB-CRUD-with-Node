import express from "express";
const router = express.Router();
import BookModel from "../models/book.js";

router.post("/addbook", (req, res) => {
  console.log(req.body);
  BookModel.create(req.body)
    .then((book) => res.json(book))
    .catch((err) => console.log(err));
});

export default router;
