const express = require("express");
const router = express.Router();
let folderController = require('./controller/folder-controller');

router.get('/categories',folderController.getCategories);
router.get('/subcategories/:categoryId',folderController.getSubCategories);
router.post('/',folderController.addCategory);
router.post('/:categoryId',folderController.addCategory);
router.put('/',folderController.editCategory);

module.exports = router;