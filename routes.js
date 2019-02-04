const express = require("express");
const router = express.Router();
let folderController = require('./controller/folderController');

router.get('/categories',folderController.getCategories);
router.get('/subcategories/:categoryId',folderController.getSubCategories);
router.post('/',folderController.addCategory);

module.exports = router;