const describePerson = (person: {
  name: string,
  age: number,
  address: {
    city: string,
    state: string,
    zipcode: number
  },
  isInSchool: boolean
}) => {
   return `${person.name} lives in ${person.address.city}`;
}

let person1 = describePerson({name: 'Mike', age: 20, address: {city: 'Austin', state: 'TX', zipcode: 78700}, isInSchool: false});

console.log(person1);
