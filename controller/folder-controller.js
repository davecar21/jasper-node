let config = require("../config");
let categoryService = require('../services/category-service');

module.exports.getCategories = async (req,res) => {
    let getCategoriesResult = await categoryService.getFolder();
    res.send(getCategoriesResult);
}

module.exports.getSubCategories = async (req,res) => {
    let category = req.params.categoryId;
    let getSubCategoriesResult = await categoryService.getSubFolder(category);
    res.send(getSubCategoriesResult);
}

module.exports.addCategory = async (req,res) => {
    let addCategoryResult = await categoryService.addCategory(req.body);
    res.send(addCategoryResult);
}

module.exports.editCategory = async (req,res) => {
    let editCategoryResult = await categoryService.editCategory(req.body);
    res.send(editCategoryResult);
}

module.exports.deleteCategory = async (req,res) => {
    let url = config.apiUrl+"/resources?";
    let resource = req.body.resource;

    resource.forEach((element,index) => {
        if(index != resource.length-1 )
            url += "resourceUri="+element.uri+"&";
        else
            url += "resourceUri="+element.uri;
    });

    let deleteCategoryResult = await categoryService.deleteCategory(url);
    res.send(deleteCategoryResult);
}

module.exports.sampleCreateComplexReport = (req,res) => {
    //createReport(param1, param2)
    //createSubReports()
    //addImages()
}