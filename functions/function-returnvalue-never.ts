// never is used to annotate a function that is never supposed
// to complete or always throw an Exception

const giveError = (msg: string): never => {
  throw new Error(msg);
}

giveError("hello");