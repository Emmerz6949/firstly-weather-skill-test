const router = require("express").Router();
const zipsController = require("../../controllers/zipsController");

// Matches with "/api/zips"
router.route("/")
  .get(zipsController.findAll)
  .post(zipsController.create);

// Matches with "/api/zips/:id"
router
  .route("/:id")
  .delete(zipsController.remove);

module.exports = router;
