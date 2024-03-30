const fs = require('fs-extra');
const path= require('path')

try {
   
const timestamp = new Date().toISOString().replace(/:/g, '-');
const folderPath = path.join("test-results", `test-results-${timestamp}`);

fs.ensureDir(folderPath);
console.log("Folder is  created",folderPath)
} catch (error) {
    console.log("Folder is not created")
}