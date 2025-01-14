function createUser(user: {
  username: string;
  email: string;
  isAdmin: boolean;
  }) {
     console.log(`${user.username} ${user.email} ${user.isAdmin}`);
     return "blah";
  }


createUser({isAdmin: true, username: 'Mike', email: 'hello@hello.com'});
 