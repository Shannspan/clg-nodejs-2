# clg-nodejs-2
CLG Node JS Lesson 2

* Create a node project folder with a student project name
* Verify the package.json file exists
* Use module.exports to export an array of 2 students
    * for example:
    [
        {
            "firstName": "John",
            "lastName":"Doe"
        }
        {
             "firstName": "Adam",
            "lastName":"Smith"
        }
    ]

* Assign the parsed content to the variable student
* Modify the array based on the following instructions: 
    * Add new element age to first student
        * key => age
        * value => 23

 * Iterate over all key value pairs and test to see if age exists in each student
 * hasOwnProperty should be true for first student but false for second student
 * The result should be displayed in the terminal      
 * Exit Node.js 
