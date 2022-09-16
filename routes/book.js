const express = require("express");

const bookRouter = express.Router();

bookRouter
  .get("/books", (req, res) => {
    res.send("Get all books");
  })
  .post("/books", (req, res) => {
    res.send("Create a new book");
  });

bookRouter
  .get("/books/:id", (req, res) => {
    res.send("Get a single book");
  })
  .put("/books/:id", (req, res) => {
    res.send("Full update a book");
  })
  .patch("/books/:id", (req, res) => {
    res.send("Partial update a book");
  })
  .delete("/books/:id", (req, res) => {
    res.send("Delete a book");
  });

module.exports = bookRouter;
