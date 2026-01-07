let num1=parseInt(prompt("Enter the lower limit"));
let num2=parseInt(prompt("Enter the higher limit"));

if(num1>num2){
    temp=num1;
    num1=num2;
    num2=temp;
}

const result=Math.floor(Math.random()*(num2-num1+1))+num1;
console.log(result);