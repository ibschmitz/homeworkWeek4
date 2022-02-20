//task1
console.log(`hello world`);
const arr = [0,8,'string',true,2.5,[2,1]];
console.log(arr);
arr.push(prompt(`add anything into the array`));
arr[0] = [3,7];

//task2

let num1 = prompt(`Enter the first number`)
let num2 = prompt(`Enter the second number`)
let multiple = num1*num2;
console.log(`${num1} x ${num2} = ${multiple}`);
// alert(`The result is: ${multiple}`);

//task3

const num3 = prompt(`Enter any number`);
console.log(num3>50);
if (num3>50) {
  console.log(`The number is greater than 50`)
} else if (num3==50) {
  console.log(`The number is equal to 50`)
  
} else {
  console.log(`The number is smaller than 50`)
}

//task4
for (let i = 0; i < arr.length; i++) {
  if (i%2!=0) {
    arr[i] = `I have been changed!`    
  }
  
}
console.log(arr);