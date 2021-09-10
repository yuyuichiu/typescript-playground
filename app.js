// let combineValues: (a: number, b: number) => number;
function add(n1, n2, callback) {
    var value = +n1 + +n2;
    callback(value);
    return value;
}
function consoleLog(value) {
    console.log('Called by callback');
    console.log(value);
}
add(5, 6, consoleLog);
