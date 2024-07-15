const express = require("express");
const router = express.Router();
const {
  getAllTestimonials,
  getAllMenuPreviews,
  getAllIntroImages,
  getAllShortMenuItems,
  getAllSides,
  getAllAddons,
  getAllDesserts,
  getSingleMenuItem,
  getAllStoryItems,
  getAllEmployees,
  getAllMissions,
  getAllPlans,
} = require("../controllers/tasks");

router.route("/testimonials").get(getAllTestimonials);
router.route("/menupreviews").get(getAllMenuPreviews);
router.route("/introimages").get(getAllIntroImages);
router.route("/shortmenuitems").get(getAllShortMenuItems);
router.route("/fullmenuitems/:id").get(getSingleMenuItem);
router.route("/sides").get(getAllSides);
router.route("/addons").get(getAllAddons);
router.route("/desserts").get(getAllDesserts);
router.route("/storyitems").get(getAllStoryItems);
router.route("/employees").get(getAllEmployees);
router.route("/missions").get(getAllMissions);
router.route("/plans").get(getAllPlans);

module.exports = router;
