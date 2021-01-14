const router = require("express").Router();
const zipRoutes = require("./zips");

// zip routes
router.use("/zips", zipRoutes);

module.exports = router;
