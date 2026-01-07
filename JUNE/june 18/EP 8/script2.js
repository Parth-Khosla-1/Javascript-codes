let num1 = prompt("enter lower Limit");
let num2 = prompt("enter Higher Limit");
let num3=(1+(+num2))
let random = Math.random()
console.log(random);

let result = Math.floor(random * num3); 
console.log(result);

let final;
if(result<(num1/2)){
    final=result+(+num1);
}
else if(result<num1){
    final=result+(num1/2);
}
else{
    final=result;
}
console.log("the final ans is "+final);