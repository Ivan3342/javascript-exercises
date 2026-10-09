const sumAll = function(val1, val2) {
    let min, max;

    if(!Number.isInteger(val1) || !Number.isInteger(val2) ||  val1 < 0 || val2 < 0)
        return 'ERROR';

    if(val1 >= val2) {
        min = val2;
        max = val1;
    }
    else {
        min = val1;
        max = val2;
    }

    let sum = 0;
    for(let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
