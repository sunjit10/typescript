const printNameOld = (name) => {
  return `Hello ${name.first} ${name.lasty}`;
}

const printNameNew = (name: {first: string; last: string }) => {
  // TS forces you to use first and last
  return `Name: ${name.first} ${name.last}`;
}

let fullName = printNameNew({first: 'Will', last: 'Ferell'});
console.log(fullName);

fullName = printNameOld({first: 'Jim', last: 'Carrey'});
console.log(fullName);