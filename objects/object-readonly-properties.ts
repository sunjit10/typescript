// Use readonly identifier to tag a field which cannot change

type User = {
  readonly id: number,
  name: string,
  isSubscriber: boolean
};

const updatePersonInfo = (user1: User) => {
  user1.isSubscriber = true;
  user1.name = "Smith";

  // Cannot change the value of id - readonly
  //user1.id = 10;
}

let person1 = {name: "Marshall", id: 30, isSubscriber: false};

updatePersonInfo(person1);

console.log(person1);