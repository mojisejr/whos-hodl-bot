const express = require("express");
const { getProjects } = require("../../controllers/project.controller");

const router = express.Router();

//@NON: Project routes

router.get("/", getProjects);

module.exports = router;
