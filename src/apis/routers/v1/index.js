const express = require("express");
const router = express.Router();

const subscriptionRoutes = require("./subscription.routes");
const projectsRoutes = require("./project.routes");

const defaultRoutes = [
  {
    path: "/subscription",
    route: subscriptionRoutes,
  },
  {
    path: "/projects",
    route: projectsRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
