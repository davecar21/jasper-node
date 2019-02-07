let config = require("../config");
let categoryService = require('../services/category-service');

module.exports.getCategories = async (req,res) => {
    let options = {
        url: config.apiUrl+"resources?expanded=true&type=folder&recursive=false&folderUri=/reports",
        headers:{
            "Accept": "application/json"
        }
    }
    let getCategoriesResult = await categoryService.getFolder(options);
    res.send(getCategoriesResult);
}

module.exports.getSubCategories = async (req,res) => {
    let category = req.params.categoryId;
    let options = {
        url: config.apiUrl+"resources?expanded=true&type=folder&recursive=false&folderUri=/reports/"+category,
        headers:{
            "Accept": "application/json"
        }
    }
    let getSubCategoriesResult = await categoryService.getSubFolder(options);
    res.send(getSubCategoriesResult);
}

module.exports.addCategory = async (req,res) => {
    let options = {
        url : config.apiUrl+"resources"+req.body.uri+"?createFolders=false",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/repository.folder+json"
        },
        body: req.body,
        json: true,
    }

    let addCategoryResult = await categoryService.addCategory(options);
    res.send(addCategoryResult);
}

module.exports.editCategory = async (req,res) => {
    let options = {
        url : config.apiUrl+"resources"+req.body.uri+"?overwrite=true",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/repository.folder+json"
        },
        body: req.body,
        json: true,
    }

    let editCategoryResult = await categoryService.editCategory(options);
    res.send(editCategoryResult);
}

module.exports.deleteCategory = async (req,res) => {
    let url = config.apiUrl+"resources?";
    let resource = req.body.resource;

    resource.forEach((element,index) => {
        if(index != resource.length-1 )
            url += "resourceUri="+element.uri+"&";
        else
            url += "resourceUri="+element.uri;
    });
    
    let options = {
        url : url,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/repository.folder+json"
        },
        body: req.body,
        json: true,
    }

    let deleteCategoryResult = await categoryService.deleteCategory(options);
    res.send(deleteCategoryResult);
}

module.exports.sampleCreateComplexReport = (req,res) => {
    //createReport(param1, param2)
    //createSubReports()
    //addImages()
}