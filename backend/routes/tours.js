import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTours,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour
} from "./../controllers/tourController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// * Create new tour
router.post("/", verifyAdmin, createTour);

// * Update tour
router.put("/:id", verifyAdmin, updateTour);

// * delete tour
router.delete("/:id", verifyAdmin, deleteTour);

// * get single tour
router.get("/:id", getSingleTour);

// * Get All tour
router.get("/", getAllTour);

// * Get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

// * Get Featured Tours
router.get("/search/getFeaturedTours", getFeaturedTours);

// * Get Tour Count
router.get("/search/getTourCount", getTourCount);

export default router;
