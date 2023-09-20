import express from "express";
const router = express.Router();
import BookModel from "../models/book.js";

// view books

router.get("/getbooks", (req, res) => {
  BookModel.find({})
    .then((book) => {
      res.json(book);
    })
    .catch((err) => console.log(err));
});

// add new book
router.post("/addbook", (req, res) => {
  console.log(req.body);
  BookModel.create(req.body)
    .then((book) => res.json(book))
    .catch((err) => res.status(401).json(err));
});

// get single book

router.get("/getbooks/:id", (req, res) => {
  const id: string = req.params.id;

  BookModel.findById(id)
    .then((book) => {
      res.json(book);
    })
    .catch((err) =>
      console.log("Some field is missing. Please refresh and try again")
    );
});

//update books

router.put("/updatebook/:id", (req, res) => {
  const id: string = req.params.id;

  BookModel.findByIdAndUpdate(
    { _id: id },
    {
      bookname: req.body.bookname,
      author: req.body.author,
      description: req.body.description,
      rating: req.body.rating,
      image: req.body.image,
    }
  )
    .then((book) => {
      res.json(book);
    })
    .catch((err) => console.log(err));
});

//delete books

router.get("/deletebook/:id", (req, res) => {
  const id: string = req.params.id;

  BookModel.findByIdAndDelete(id)
    .then((book) => {
      res.json(book);
    })
    .catch((err) => console.log(err));
});

export default router;
