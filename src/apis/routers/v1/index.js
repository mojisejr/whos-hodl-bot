const express = require("express");
const router = express.Router();

const subscriptionRoutes = require("./subscription.routes");
const projectsRoutes = require("./project.routes");
const holderRoutes = require("./holder.routes");
const roleRoutes = require("./role.routes");
const messageRoutes = require("./message.routes");

const defaultRoutes = [
  {
    path: "/subscription",
    route: subscriptionRoutes,
  },
  {
    path: "/project",
    route: projectsRoutes,
  },
  {
    path: "/holder",
    route: holderRoutes,
  },
  {
    path: "/role",
    route: roleRoutes,
  },
  {
    path: "/message",
    route: messageRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
