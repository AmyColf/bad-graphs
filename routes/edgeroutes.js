const express = require("express");

let router = express.Router();

const linkNodes = (req, res) => {
    if (req.body == null || req.body.parent == null || req.body.child == null) {
        res.status(400).json({
            success: false,
            message: "Missing parent or child IDs"
        });
    }
    req.db.linkNodesById(req.body.parent, req.body.child);
    res.status(200).json({ success: true });
};
const getChildren = (req, res) => {
    if (req.params.parent == null) {
        res.status(400).json({
            success: false,
            message: "Missing parent ID"
        });
    }
    res.status(200).json(req.db.getChildren(req.params.parent));
};

router.put("/", linkNodes);
router.get("/:parent", getChildren);

module.exports = router;
