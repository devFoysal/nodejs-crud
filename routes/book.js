const express = require("express");

const bookRouter = express.Router();

bookRouter
  .get("/", (req, res) => {
    res.send("Get all books");
  })
  .post("/", (req, res) => {
    res.send("Create a new book");
  });

bookRouter
  .get("/:id", (req, res) => {
    res.send("Get a single book");
  })
  .put("/:id", (req, res) => {
    res.send("Full update a book");
  })
  .patch("/:id", (req, res) => {
    res.send("Partial update a book");
  })
  .delete("/:id", (req, res) => {
    res.send("Delete a book");
  });

module.exports = bookRouter;
