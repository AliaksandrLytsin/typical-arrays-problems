
exports.min = function min (array) {
    if (array === undefined || !array.length) return 0;
    let result = 0;    
    array.forEach(item => {
        if (result > item) result = item;
    });     
    return result;
}

exports.max = function max (array) {
    if (array === undefined || !array.length) return 0;
    let result = 0;   
    array.forEach(item => {
        if (result < item) result = item;
    }); 
    return result;
}

exports.avg = function avg (array) {
    if (array === undefined || !array.length) return 0;
    let result = 0;
    let sum = array.reduce((sum, item) => sum + item);
    result = sum / array.length;
    return result;
}
