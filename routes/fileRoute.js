const express = require("express");
const router = express.Router();
let fileController = require('../controller/fileController');

router.get('/',fileController.getResources);
router.post('/',fileController.addResources);

module.exports = router;