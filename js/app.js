//task1 create an array
console.log(`hello world`);
const arr = [0,8,'string',true,2.5,[2,1]];
console.log(arr);
//push an element into the array
arr.push(prompt(`add anything into the array`));
//update the first element in the array
arr[0] = [3,7];

//task2 create two numbers and multiple them


function multiple() {
  let a = prompt(`Enter the first number`)
  let b = prompt(`Enter the second number`)
  console.log(`${a} x ${b} = ${a*b}`);
}
multiple();

//task3 create an if statement

const num3 = prompt(`Enter any number`);
console.log(num3>50);
if (num3>50) {
  console.log(`The number is greater than 50`)
} else if (num3==50) {
  console.log(`The number is equal to 50`)
  
} else {
  console.log(`The number is smaller than 50`)
}

//task4 change the array element when the index is odd
for (let i = 0; i < arr.length; i++) {
  if (i%2!=0) {
    arr[i] = `I have been changed!`    
  }
  
}
console.log(arr);
