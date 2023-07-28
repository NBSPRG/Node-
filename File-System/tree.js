let fs = require("fs");
let path = require("path");

function TreeFn(dirPath){
    // console.log("Tree implemented ", dirPath);
    //let destPath;
    if(dirPath == undefined)
    {
        treeHelper(process.cwd(), "")
        return;
    }

    else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            // 2. create -> organized files -> directory

            treeHelper(dirPath, "");
        }

        else{
            console.log("Please enter correct path...");
            return;
        }
    }
}

function treeHelper(dirpath, indent){
    // check is file/folder
    let isfile = fs.lstatSync(dirpath).isFile();
    if(isfile == true){
        let fileName = path.basename(dirpath);
        console.log(indent + "|---" +fileName);
    }
    else{
        let dirName = path.basename(dirpath);
        console.log(indent + "|___" + dirName);

        let children = fs.readdirSync(dirpath);
        for(let i = 0; i < children.length; i++){
            let childpath = path.join(dirpath, children[i]); 
            treeHelper(childpath, indent + "\t");
        }
    }
}

module.exports = {
    treeKey:TreeFn
}

