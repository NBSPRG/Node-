 //let utilityObj = require("./commands/utility");
let fs = require("fs");
let path = require("path");

let types = {
    media : ["mp4", "mkv"],
    photo : ["jpeg", "jpg", "png", "heic"]
    ,archives : ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents : ["docx", "doc", "pdf", "xlsx", "xls", "odt", "odp", "odg", "odf", "txt", "ps", "tex", "json"],
    program :["js", "py", "ipynb", "c", "cpp", "java", "jsx"]
    ,app : ["exe", "dmg", "pkg", "deb"]
}


function organizeFn(dirPath){
    // console.log("organize implemented ", dirPath);

    // 1. input -> directory path given
    
    
    
   
    let destPath;
    if(dirPath == undefined)
    {
        destPath = process.cwd();
        return;
    }

    else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            // 2. create -> organized files -> directory

            destPath = path.join(dirPath, "organizes_files");
            if(fs.existsSync(destPath) == false)
            {
                fs.mkdirSync(destPath);
            }

            else
            {
                console.log("Directory already formed ...");
            }
        }

        else{
            console.log("Please enter correct path...");
        }
    }

    organizeHelper(dirPath, destPath);
}

function organizeHelper(src, dest){
    // 3. identify categories of all the files present in that input directory 
    let childName = fs.readdirSync(src);
    console.log(childName);
    for(let i = 0; i < childName.length; i++){
        let childAddress = path.join(src, childName[i]);
        let isfile = fs.lstatSync(childAddress).isFile();
        if(isfile){
            // console.log(childName[i]);
            let category = getCategory(childName[i]);
            console.log(childName[i] + "belong to ---> ", category);
        

         // 4. copy / cut files to that directory inside any of the category folder
        sendFiles(childAddress, dest, category);
        }
    }   
}

function sendFiles(srcFilePath, dest, category){
    let category_path = path.join(dest, category);
    if(fs.existsSync(category_path) == false){
        fs.mkdirSync(category_path);
    }

    let filename = path.basename(srcFilePath);
    let destfilepath = path.join(category_path, filename);
    fs.copyFileSync(srcFilePath, destfilepath);
    console.log(filename + "copied to ", category_path);
}
function getCategory(name){
    let ext = path.extname(name);
    //console.log(ext);
    ext = ext.slice(1);
    for(let type in types){
       let currTypeArray = types[type];
       for(let i = 0; i < currTypeArray.length; i++){
        if(ext == currTypeArray[i]) {
            return type;
        }
       }
    }

    return "others";
}

module.exports={
    organizeKey:organizeFn
}