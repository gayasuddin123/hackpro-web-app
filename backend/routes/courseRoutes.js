const express = require("express");
const router = express.Router();
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  addReview,
  getCourseContent,
} = require("../controllers/courseController");
const { protect, authorize, hasPurchased } = require("../middleware/auth");

router.route("/").get(getCourses).post(protect, authorize("admin", "instructor"), createCourse);

router.route("/:slug").get(getCourse);

router
  .route("/:id")
  .put(protect, authorize("admin", "instructor"), updateCourse)
  .delete(protect, authorize("admin"), deleteCourse);

router.route("/:id/reviews").post(protect, addReview);

router.route("/:id/content").get(protect, hasPurchased, getCourseContent);

module.exports = router;