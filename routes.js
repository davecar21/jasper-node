const express = require("express");
const router = express.Router();
let folderController = require('./controller/folder-controller');
let reportController = require('./controller/reports-controller');

//folder
router.get('/categories',folderController.getCategories);
router.get('/subcategories',folderController.getSubCategories);
router.post('/',folderController.addCategory);
router.put('/',folderController.editCategory);
router.delete('/',folderController.deleteCategory);

//report
router.post('/reports',reportController.createReport);
router.put('/reports',reportController.editReport);

module.exports = router;