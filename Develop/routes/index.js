const router = require("express").Router();
const apiRoutes = require("./api/index");

router.use("/api", apiRoutes);
// Middleware for '/tags' path
router.use("/test", (req, res, next) => {
  res.send("Hi!!");
});

router.use((req, res) => {
  res.send("<h1>Wrong Route2!</h1>");
});

module.exports = router;
