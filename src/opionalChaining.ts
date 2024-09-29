type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday : new Date()}
}

let customer = getCustomer(1)
// if(customer !== null && customer !== undefined)
// console.log(customer.birthday)

//Optional property acces operator
console.log(customer?.birthday?.getFullYear())

//optional element access operator
// if(customer !== null && customer !== undefined)
// costumers?.[0]

//optional call
// let log: any = (message : string) => console.log(message)

let log: any = null
log?.('a')