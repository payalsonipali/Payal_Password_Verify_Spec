const fs = require("fs");

const readFriends = function(filepath){
    if(!filepath)
    throw new Error("file path is missing");
    return fs.readFileSync(filepath)
}

module.exports = { readFriends }
