const express = require("express");
const router = express.Router();

const Course = require("../models/Course.model");

// GET - "/" - List of all Courses
router.get("/", (req, res) => {
  const query = {};

  // Build the query based on passed query params, e.g., name, category
  if (req.query.name) {
    query["name"] = req.query.name;
  }

  if (req.query.tech) {
    query["techStack"] = req.query.tech;
  }

  Course.find(query)
    .then((courses) => {
      res.json(courses);
    })
    .catch((error) => {
      next({ ...error, message: "Failed to retrieve courses" });
    });
});

// GET - "/:courseId" - Details of course by ID.
router.get("/:courseId", (req, res, next) => {
  const { courseId } = req.params;

  Course.findById(courseId)
    .then((course) => {
      res.status(200).json(course);
    })
    .catch((error) => {
      next({ error, message: "Error getting course" });
    });
});

module.exports = router;
