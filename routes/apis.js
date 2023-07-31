const express = require("express");
const router = express.Router();
const path = require("path");

const apiTareas = require("../controllers/apiTareas");

router.get("/", apiTareas.lista);

module.exports = router;