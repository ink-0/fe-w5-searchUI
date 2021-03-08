const express = require("express");
const router = express.Router();
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./api/planningEvent.json", "utf8"));

router.get("/", (req, res, next) => {
  console.log("data는제발제발",data);
  res.json(data);
});

module.exports = router;

