function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(1);
// if(customer !== null && customer !== undefined)
// console.log(customer.birthday)
//Optional property acces operator
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
