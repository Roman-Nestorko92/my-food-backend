const express = require("express");
const router = express.Router();
const authcontrollers = require("../../controllers/authControllers");
const { schemas, User } = require("../../modals/user");
const { validateBody } = require("../../utils");
const { authtificate, upload } = require("../../middlewares");

// sigh up
router.post(
  "/register",
  validateBody(schemas.userRegistrSchema),
  authcontrollers.register
);

// router.post("/register", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const isUsed = await User.findOne({ email });

//     if (isUsed) {
//       return res.status(300).json({ message: "This email is already use" });
//     }

//     const user = new User({ email, password });
//     await user.save();
//     res.status(201).json({ message: "User is add" });
//   } catch (error) {
//     console.log(error);
//   }
// });

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
