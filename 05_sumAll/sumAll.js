const sumAll = function(first, last) {
    let temp;
    let sum = 0;

    if (typeof first != "number" || typeof last != "number"
        || (first + last) % 1 != 0 || first < 0 || last < 0
    ) {
        return "ERROR";
    }

    if (first > last) {
        temp = first;
        first = last;
        last = temp;
    }

    for (let add = first; add <= last; add++) {
        sum += add;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
