let numbers: number[] = [];
// let numbers: number[] = [1,2,3];
// let numbers : number[] = [1,2,'3'] // error

numbers[0] = 1
numbers[1] = 2
// numbers[1] = '2' // error

numbers.forEach(n=>n.toString)
