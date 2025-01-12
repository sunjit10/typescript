var printNameOld = function (name) {
    return "Hello ".concat(name.first, " ").concat(name.lasty);
};
var printNameNew = function (name) {
    return "Name: ".concat(name.first, " ").concat(name.last);
};
var fullName = printNameNew({ first: 'Will', last: 'Ferell' });
console.log(fullName);
fullName = printNameOld({ first: 'Jim', last: 'Carrey' });
console.log(fullName);
