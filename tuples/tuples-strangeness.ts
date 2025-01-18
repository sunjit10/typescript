// You would think that HTTPResponse MUST always have 2 elements
// with first element being a number and second a string
type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [400, "OK"];

// Strangely enough, after the initial definition, you can
// add any types/frequency of number or strings
goodRes[0] = 200;
goodRes.push("blah", "blah");
goodRes.push(300, 400, 401, 402, 403, 404);

console.log(goodRes);