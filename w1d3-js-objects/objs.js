// today we will explore objects

'use strict';

var course = {
  nameOfCourse: 'Web Development Bootcamp',
  startDate: 'May 9, 2018',
  staff: ['sumi','saba']
};

course.students = [];
course.students.push( 'Sorin');
course.students.push( 'Sara');
course.students.push( 'Chantal');

course['staff'].push( 'Juan');

var newAttributeName = 'duration'
course.duration = 10;
course[newAttributeName] = 8;


function changeDate (someCourse, newDate) {
  someCourse.startDate = newDate;
  return;
}

changeDate(course, 'May 7, 2018')

var emptyCourse = {}
changeDate(emptyCourse, 'June 2018')

console.log(emptyCourse);

// console.log(course.nameOfCourse);
// console.log(course.startDate);
// console.log('Teachers: ',course.teachers);
// console.log('Students: ',course.students);

console.log('Everything: ', course)

console.log('One of our students is ', course.students[2]   )