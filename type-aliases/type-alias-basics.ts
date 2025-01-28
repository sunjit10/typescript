// This is a type alias!
// Note: It has a = sign before { unlike Interface 
type Person = {
  name: string,
  age: number
};

const sayHello = (person: Person) => {
  return `Hey ${person.name} you are ${person.age} years young`;
}

const msg = sayHello({name: 'Jack', age: 30});
console.log(msg);