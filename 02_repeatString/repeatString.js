const repeatString = function(string, num) {
    let returnstr = "";
    for (let i = 0; i < num; i++) {
        returnstr += `${string}`;
    }
    return returnstr;
};

// Do not edit below this line
module.exports = repeatString;
