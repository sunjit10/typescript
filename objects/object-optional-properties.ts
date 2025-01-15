// Use ? to make a parameter optional

type personName = {
  fname: string,
  mname?: string,
  lname: string
};

const printPersonInfo =  (person: personName): void => {
  console.log(`${person.fname}  ${person.lname}`);
}

printPersonInfo({fname: 'Mike', mname: 'J', lname: 'Smith'});

// Since mname is Optional, you can make the call below
printPersonInfo({fname: 'John', lname: 'Marshall'});