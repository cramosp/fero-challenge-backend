require("dotenv").config();

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const courseRoutes = require("./routes/course.routes");
app.use("/courses", courseRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);

require("./error-handling")(app);


module.exports = app;
