// enum does not exist in JS, only in TS

// enum allows you to define a set of named constants
// The constants can have number or string values

// WITHOUT enums

const PENDING: number = 0;
const SHIPPED: number = 1;
const DELIVERED: number = 2;
const RETURNED: number = 3;

let orderStatus = RETURNED;

function isDelivered(status: number) {
  return status === DELIVERED;
}

console.log(isDelivered(orderStatus));


// WITH enums

enum orders {
     PENDING,    // Implicitly, this has value 0
     SHIPPED,    // 1
     DELIVERED,  // 2
     RETURNED    // 3
}

orderStatus = orders.RETURNED;

function isDeliveredUsingEnum(status: orders) {
  return status === orders.DELIVERED;
}

console.log(isDelivered(orderStatus));