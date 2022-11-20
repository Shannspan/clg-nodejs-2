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

//trouble shooting whether the student array is functioninf correctly

console.log(studentParsed[0]);
// result in terminal is correct

//FIX REQUIRED THIS IS PUSH NOT WORKING

//let ageKey = (studentParsed[0]);

//FIX ATTEMPT SEEMS TO BE REQUIRED WITH "PUSH". CHANGING FROM OBJECT TO ARRAY HAS NOT FIXED ISSUE

//student.push

//ABOVE DOES NOT CREATE ERRORS - BUT IT ALSO DOES NOT WORK


//neither does this...

module.export = (studentStringify[0][{"age": 23}]);
