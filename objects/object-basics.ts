const printNameOld = (name) => {
  return `Hello ${name.first} ${name.lasty}`;
}

let fullName = printNameOld({first: 'Jim', last: 'Carrey'});
console.log(fullName);


// The new way in TS by specifying types of object fields

const printNameNew = (name: {first: string; last: string }) => {
  // TS forces you to use first and last
  return `Name: ${name.first} ${name.last}`;
}

fullName = printNameNew({first: 'Will', last: 'Ferell'});
console.log(fullName);

