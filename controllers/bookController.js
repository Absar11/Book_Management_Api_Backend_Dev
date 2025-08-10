const Book = require("../models/bookSchema");

const createBook = async (req, res) => {
  try {
    const { title, author, genre, publishYear } = req.body;

    if (!title || !author) {
      return res.status(201).json({
        message: "Title and Author fileds are required",
      });
    }

    const newBook = await Book.create({ title, author, genre, publishYear });

    res.status(200).json({
      message: "New Book added successfully",
      book: newBook,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error to add new book in the database",
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      message: "Books are fetching successfully",
      books,
    });
  } catch (err) {
    console.log("Error in fetching all books");
    res.status(400).json({
      message: "Error to fetching all books",
    });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({
      message: "Book fetched successfully",
      book,
    });
  } catch (err) {
    console.log("Error fetching book:", err.message);
    res.status(500).json({
      message: "Error fetching book",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Book Deleted Successfully",
      deletedBook,
    });
  } catch (err) {
    console.log("Error in Deleting book");
    res.status(400).json({
      message: "Error To Delete",
    });
  }
};

module.exports = { createBook, deleteBook, getAllBooks, getBook, updateBook };
