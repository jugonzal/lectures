// today we will explore objects

'use strict';

var nameOfCourse = 'Web Development Bootcamp';

var students = [];
students.push( 'Sorin');
students.push( 'Sara');
students.push( 'Chantal');

var teachers = [];
teachers.push('Juan');

var startDate = 'May 9, 2018';

function changeDate (someDate, newDate) {
  someDate = newDate;
  return;
}

changeDate(startDate, 'May 7, 2018')

console.log(nameOfCourse);
console.log(startDate);
console.log('Teachers: ',teachers);
console.log('Students: ',students);