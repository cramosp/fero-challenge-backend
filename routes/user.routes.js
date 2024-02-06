const express = require("express");
const router = express.Router();

const { isAuthenticated } = require("../middleware/jwt.middleware");

const User = require("../models/User.model");

// PUT - "/courses" - Update courses of a user.
router.put("/courses", isAuthenticated, (req, res, next) => {
  const { courseIds } = req.body;
  const authenticatedUserId = req.payload._id;

  User.findByIdAndUpdate(authenticatedUserId, { $addToSet: { courses: { $each: courseIds } } }, { new: true })
    .then((updatedUser) => {
      res.status(200).json(updatedUser);
    })
    .catch((error) => {
      next({ ...error, message: "Failed to update the business" });
    });
});

module.exports = router;
