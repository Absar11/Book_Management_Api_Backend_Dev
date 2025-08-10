const express = require("express");
const {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} = require("../controllers/bookController");
const router = express.Router();

router.post("/createBook", createBook);
router.delete("/deleteBook/:id", deleteBook);
router.get("/getAllBooks", getAllBooks);
router.get("/getBook/:id", getBook);
router.put("/updateBook/:id", updateBook);

module.exports = router;
