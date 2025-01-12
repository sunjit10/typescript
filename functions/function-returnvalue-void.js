// Make it explicit that the function cannot return anything
var returnNothing = function (num) {
    for (var i = 0; i < num; i++) {
        console.log(i);
    }
    //return "hello";
};
returnNothing(3);
