// never is used to annotate a function that is never supposed
// to complete or always throw an Exception
var giveError = function (msg) {
    throw new Error(msg);
};
giveError("hello");
