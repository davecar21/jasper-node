const express = require("express");
const router = express.Router();
let fileController = require('./controller/fileController');

router.get('/categories',fileController.getCategories);
router.get('/subcategories/:categoryName',fileController.getSubCategories);
router.post('/',fileController.addResources);

module.exports = router;