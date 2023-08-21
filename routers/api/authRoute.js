const express = require("express");
const router = express.Router();
const authcontrollers = require("../../controllers/authControllers");
const { schemas } = require("../../modals/user");
const { validateBody } = require("../../utils");
const { authtificate, upload } = require("../../middlewares");

// sigh up
router.post(
  "/register",
  validateBody(schemas.userRegistrSchema),
  authcontrollers.register
);

// sigh in
router.post(
  "/login",
  validateBody(schemas.userLoginSchema),
  authcontrollers.login
);

router.get("/current", authtificate, authcontrollers.getCurrent);

router.post("/logout", authtificate, authcontrollers.logout);

router.patch(
  "/avatars",
  authtificate,
  upload.single("avatar"),
  authcontrollers.updateAvatar
);

module.exports = router;
