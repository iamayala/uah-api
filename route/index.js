const express = require("express");
const router = express.Router();

// Import route files
const authRoute = require("./v1/auth.route.js");

// Aggregate routes
router.use("/auth", authRoute);

// Export the aggregated router
module.exports = router;
