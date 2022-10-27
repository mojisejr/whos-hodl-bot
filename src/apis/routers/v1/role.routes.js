const express = require("express");
const {
  getAllRoles,
  updateRoleById,
  deleteRoleById,
  newRole,
} = require("../../controllers/role.controller");

const router = express.Router();

//@NON: role routes

router.get("/:discordGuildId", getAllRoles);
router.put("/:discordGuildId", updateRoleById);
router.post("/new", newRole);

module.exports = router;
