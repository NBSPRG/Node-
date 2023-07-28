function helpFn(){
    console.log(`List of all commands : 
                        node main.js tree "dirPath"
                        node main.js organize "dirPath"
                        node main.js help 
    `);
}

module.exports={
    helpKey: helpFn
}