const express = require("express");

let router = express.Router();

const addNode = (req, res) => {
  req.db.addNode(req.body);
  res.status(200).json({ success: true });
};
const getNodes = (req, res) => {
  res.status(200).json(req.db.getNodes());
};

router.put("/", addNode);
router.get("/", getNodes);

module.exports = router;
