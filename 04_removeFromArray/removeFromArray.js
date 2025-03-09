const removeFromArray = function() {
    let array = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        for (let counter = 0; counter < array.length; counter++) {
            if (array[counter] === arguments[i]) {
                array.splice(counter,1);
                counter--;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
