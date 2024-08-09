import express from "express";
// ! This is admin page
import {
  createTour,
  updateTour,
  deleteTour,
  getAllTour
} from "../controllers/tourController.js";
import {
  getAllUser,
  deleteUser,
  updateUser
} from "../controllers/userController.js";
import {
  getAllBooking,
  deleteBooking
} from "../controllers/bookingController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Tour routes
router.post("/tours", verifyAdmin, createTour);
router.put("/tours/:id", verifyAdmin, updateTour);
router.delete("/tours/:id", verifyAdmin, deleteTour);
router.get("/tours", verifyAdmin, getAllTour);

// User routes
router.get("/users", getAllUser);
router.put("/users/:id", verifyAdmin, updateUser);
router.delete("/users/:id", verifyAdmin, deleteUser);

// Booking routes
router.get("/bookings", getAllBooking);
router.delete("/bookings/:id", verifyAdmin, deleteBooking);

export default router;
