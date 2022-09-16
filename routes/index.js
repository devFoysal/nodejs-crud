const express = require("express");

const router = express.Router();

const bookRouter = require("./book");

router.get("/", (req, res) => {
  res.send("Home page");
});

router.use("/books", bookRouter);

router.all("/*", (req, res) => {
  res.send("Page not found");
});

module.exports = router;
