const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/", todoController.show);

router.post("/", todoController.create);

router.get("/delete/:id", todoController.deleteOne);

router.get("/deleteall", todoController.deleteAll);

module.exports = router;
