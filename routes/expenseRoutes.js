import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addExpense,
  getAllExpense,
  deleteExpense,
  downloadExpenseExcel,
} from "../controllers/expenseController.js";
const router = express.Router();

router.post("/add", protect, addExpense);
router.get("/get", protect, getAllExpense);
router.delete("/:id", protect, deleteExpense);
router.get("/download-excel", protect, downloadExpenseExcel);

export default router;
