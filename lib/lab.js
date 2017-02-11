'use strict';

const studentOne = {
  name: "Mike",
  cheated: true,
  score: 100
};

const studentTwo = {
  name: "Bernard",
  cheated: false,
  score: 90
};

const students = [studentOne, studentTwo];

const deductForCheating = function(students) {
  if (students.cheated === true) {
    students.score = students.score - 25;
  } return students.score;
};

// write a callback that can be passed to runCheating Script
// it should have a parameter for a student object
// and should +5 to their score
const addForHonesty = function(students) {
  if (students.cheated === false) {
    students.score = students.score + 5;
  } return students.score;
};

// the function should accept an array of students
// and two callback functions
const runCheatingScript = function (students, students.cheated, operation) {
  return operation(studentOne, studentTwo);
  // loop through the students array and check who cheated
  // if they cheated or not
  // then pass them as an argument to the correct callback

};

// the function should get passed an array of students
// and two callback functions
runCheatingScript();
