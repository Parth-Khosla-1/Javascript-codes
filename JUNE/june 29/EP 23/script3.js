// //let us first make a sting and an object

// let string1='parth';
// let string2='parth';

// //in this case i feel like that both the strings will point to same direction but if i change string2 it will create anew memory location and will not influence the string1

// //now lets change the string2

// string2='akash'

// //i think here the string2 will now create an other memory location


// //another way to copy a stiring 
// let string1='parth';
// let string2=string1;

// // now same will happen that they both will address to same memory location

// //now let us change string2

// string2=string2+'123';


//Now let us deal with Non primitive types

// let obj1={
//     firstName:'Parth',
//     lastName:'Khosla'
// }

// let obj2=obj1;

//both the variables are pointing to same location so if something is changed by boj2 the changes will reflect to obj1 also 


let obj1={
    firstName:'Parth',
    lastName:'Khosla'
}

let obj2={...obj1}//spread operator

// obj2{
//     firstName:'Parth', //copying manually
//     lastName:'Khosla'
// }

// obj2=Object.assign(      //object.assign
//     obj1
// )