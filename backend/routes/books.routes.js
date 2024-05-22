import express from "express";
import {
  getAllbooks,
  addNewBooks,
  deleteBook,
  updateBook,
} from "../controllers/books.js";
const router = express.Router();

router.get("/", getAllbooks);
router.post("/", addNewBooks);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);
export default router;
