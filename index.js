//Create variable and require array, make array dsiplay in terminal

const exportArray = require('./studentarray_export');

//make sure it's working - had to change default settings in vs code achieve this (typescript.suggestionActions.enabled: false). Otherwise vs code is insisting on ES6. This course is using common.js. 
// console.log(exportArray);

//before parsing the array I need to bring it in - for this I am using stringify(), even though the array is already a JSON string. If I try to parse the 'student' directly I get errors saying that the object cannot be read. 

const student = (exportArray);

const studentStringify = (JSON.stringify(student));

console.log(studentStringify);

const studentParsed = (JSON.parse(studentStringify));

console.log(studentParsed);

// const newKey = student.push({"age":""});

// console.log(newKey);

console.log(studentParsed);

//trouble shooting whether the student array is functioning correctly

console.log(studentParsed[0]);
// result in terminal is correct
//FIX REQUIRED AS PUSH NOT WORKING - conversation with fellow student: 
//remember you are adding a property to an object in an array,
//not a new object to the array! Solution found: 

student[0].age = 23;
console.log(student);

//Attempt to isolate key values in one object -eg make it an array. 
//Next, structure to iterate through both objects - forEach?

let student1 = Object.keys(student[0]);
let student2 = Object.keys(student[1]);

console.log(student1);
console.log(student2);


//Attempt below to achieve same result with one variable - 
//only results in index numbers.
// let studentAll = Object.keys(student);
// console.log(studentAll);

//The below does not achieve desired result either - 
//still shows index numbers only
// let StudentAll2 = Object.keys(studentAll);
// console.log(StudentAll2);

//Change of strategy. Use filter to isolate age from original student object.

checkStudent = student.filter(student => student.age >= 0);
console.log("The student object with an age property is", checkStudent);

//Utilise hasOwnProperty to achieve true for Eep and false for Dawn.
console.log(student1.hasOwnProperty(2));

console.log(student2.hasOwnProperty(2));







