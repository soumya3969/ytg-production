import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  updateTour
} from "./../controllers/tourController.js";

const router = express.Router();

// * Create new tour
router.post("/", createTour);

// * Update tour
router.put("/:id", updateTour);

// * delete tour
router.delete("/:id", deleteTour);

// * get single tour
router.get("/:id", getSingleTour);

// * Get All tour
router.get("/", getAllTour);

export default router;
