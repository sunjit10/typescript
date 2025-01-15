// matching the order of arguments and parameters does not matter

function createUserOne(user: {
  username: string,
  email: string,
  isAdmin: boolean
  }) {
     console.log(`${user.username} ${user.email} ${user.isAdmin}`);
     return "blah";
  }

createUserOne({isAdmin: true, username: 'Mike', email: 'hello@hello.com'});

// alternative way to define function params using semicolon

function createUserTwo(user: {
  username: string;
  email: string;
  isAdmin: boolean;
  }) {
     console.log(`${user.username} ${user.email} ${user.isAdmin}`);
     return "blah";
  }

createUserTwo({isAdmin: false, username: 'John', email: 'john@hello.com'});
 