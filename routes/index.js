const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const userRoutes = require("../routes/api/userRoutes");
const signUp = require("./signUp");
const apiRoutes = require("./api");
const tipsRouter = require('./tips');
const guest = require('./guestRoute');
// User Routes to pages
router.use("/", homeRoutes);
router.use("/", userRoutes);
router.use("/", signUp);
router.use("/api", apiRoutes);
router.use("/", guest);

router.use('/tips', tipsRouter);

module.exports = router;
