const { Schema, model } = require("mongoose");

const unitSchema = new Schema({
  unitName: {
    type: String,
    required: true,
  },
  unitDescription: {
    type: String,
    required: true,
  },
  timeInMinutes: {
    type: Number,
  },
});

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: true,
    },
    language: {
      type: [String],
      required: true,
      enum: [
        "english",
        "spanish"
      ]
    },
    timeInMinutes: {
      type: Number,
    },
    techStack: {
      type: [String],
    },
    image: {
      type: String,
    },
    video: {
      type: String,
    },
    price: {
      type: Number,
    },
    content: {
      type: [unitSchema],
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Course = model("Course", courseSchema);

module.exports = Course;
