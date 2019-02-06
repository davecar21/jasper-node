const express = require("express");
const router = express.Router();
let folderController = require('./controller/folder-controller');

//folder
router.get('/categories',folderController.getCategories);
router.get('/subcategories/:categoryId',folderController.getSubCategories);
router.post('/',folderController.addCategory);
router.put('/',folderController.editCategory);
router.delete('/',folderController.deleteCategory);

module.exports = router;