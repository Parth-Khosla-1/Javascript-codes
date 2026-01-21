const userAge = 22

const isSchoolStudent = (userAge >= 5) && (userAge <= 18)
const isCollegeStudent = (userAge >= 18) && (userAge <= 24)

const isStudent = isSchoolStudent || isCollegeStudent

const andResult = 0 && 2
const orResult = 0 || 2

const andResult2 = '' && 'Hello'
const orResult2 = '' || 'Hello'

const andResult3 = 'Hello' && null
const orResult3 = 'Hello' || null

const andResult4 = 'Hello' && -4 + 4
const orResult4 = undefined || 4 + 8 * 5

const andResult5 = 'Hello' && console.log('hello1')
const orResult5 = undefined || console.log('hello2')




console.log("my examples");

const resulta1 = 0 && 1;
const resulta2 = 1 && 0;
const resulta3 = 0 && null;
const resulta4 = true && 1;


console.log(resulta1);
console.log(resulta2);
console.log(resulta3);
console.log(resulta4);


const resulto1 = 0 || 1;
const resulto2 = 1 || 0;
const resulto3 = 0 || null;
const resulto4 = true || 1;


console.log(resulto1);
console.log(resulto2);
console.log(resulto3);
console.log(resulto4);