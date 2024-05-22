import Book from "../models/Books.js";
import { createError } from "../utils/error.js";

// this function retrieves all books,
//Read
export const getAllbooks = async (req, res, next) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({ success: true, data: books });
  } catch (error) {
    next(
      createError(
        error.status,
        error?.response?.data?.error.message || error?.message
      )
    );
  }
};

//create
export const addNewBooks = async (req, res, next) => {
  try {
    const newBook = await Book.create({ ...req.body.data });
    return res.status(200).json({ success: true, data: newBook });
  } catch (error) {
    next(
      console.log(
        createError(
          error.status,
          error?.response?.data?.error.message || error?.message
        )
      )
    );
  }
};

//update
export const updateBook = async (req, res, next) => {
  const { id } = req.params;
  const { title, author, genre, yearPublished } = req.body.data;
  let currBooktoUpdate;
  try {
    currBooktoUpdate = await Book.findByIdAndUpdate(id, {
      title,
      author,
      genre,
      yearPublished,
    });
    if (!currBooktoUpdate) {
      return createError(500, "unable to update");
    }
    return res.status(200).json({ success: true, data: currBooktoUpdate });
  } catch (error) {
    next(
      console.log(
        createError(
          error.status,
          error?.response?.data?.error.message || error?.message
        )
      )
    );
  }
};

//delete
export const deleteBook = async (req, res, next) => {
  const bookId = req.params.id;
  try {
    const findCurrentBook = await Book.findByIdAndDelete(bookId);
    if (!findCurrentBook) {
      return res.status(404).json({ message: "post not found" });
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    next(
      console.log(
        createError(
          error.status,
          error?.response?.data?.error.message || error?.message
        )
      )
    );
  }
};
