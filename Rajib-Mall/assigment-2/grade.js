//#region
/*
Consider a function named compute-grade that computes the grade of a student based 
on his attendance and the total marks obtained out of 100. 

If the attendance is below 80%, the student is assigned "F" grade irrespective of 
the marks scored. 
If the attendance of a student is 80% or more, the student with mark M is assigned 
a grade from EX, A, B, C, D, P, F depending upon whether 

M1 = {M : 90% <= M <= 100%}
M2 = {M : 80% <= M < 90%} 
M3 = {M : 70% <= M < 80%}
M4 = {M : 60% <= M < 70%}
M5 = {M : 50% <= M < 60%}
M6 = {M : 30% <= M < 50%} 
M7 = {M : 30% >  M}

If the decision making about the grade computation is represented in the form of a 
decision table, how many test cases are needed for decision table testing? 

a) 6 
b) 7 
c) 8 (Accepted Answer)
d) 9

===================

A1 = {A : 80% < A}
A2 = {A : 80% > A}
M1 = {M : 90% <= M <= 100%}
M2 = {M : 80% <= M < 90%} 
M3 = {M : 70% <= M < 80%}
M4 = {M : 60% <= M < 70%}
M5 = {M : 50% <= M < 60%}
M6 = {M : 30% <= M < 50%} 
M7 = {M : 30% >  M}

a1: Grade A
a2: Grade B
a3: Grade C
a4: Grade D
a5: Grade P
a6: Grade F
*/
//#endregion
const attendanceError =
  "Attendance should be integer, within range from 1 to less than or equal to 100";

const marksError =
  "Marks should be integer, within range from 1 to less than or equal to 100";

function isInteger(arg) {
  return Number.isInteger(arg);
}

function isInValidRange(arg) {
  if (arg < 1 || arg > 100) {
    return false;
  }
  return true;
}
//
function computeGrade(attendance, marks) {
  //
  if (isInValidRange(attendance) === false) {
    throw new RangeError(attendanceError);
  }

  //
  if (isInValidRange(marks) === false) {
    throw new RangeError(marksError);
  }

  //
  if (isInteger(attendance) === false) {
    throw new RangeError(attendanceError);
  }

  //
  if (isInteger(marks) === false) {
    throw new RangeError(marksError);
  }

  //
  if (attendance < 80) {
    return GradeType.F_Grade;
  }
  // 90% <= marks <= 100%
  if (marks >= 90 && marks <= 100) {
    return GradeType.A_Grade;
    // 80% <= marks < 90%
  } else if (marks >= 80 && marks < 90) {
    return GradeType.B_Grade;
    // 70% <= marks < 80%
  } else if (marks >= 70 && marks < 80) {
    return GradeType.C_Grade;
    // 60% <= marks < 70%
  } else if (marks >= 60 && marks < 70) {
    return GradeType.D_Grade;
    // 50% <= marks < 60
  } else if (marks >= 50 && marks < 60) {
    return GradeType.E_Grade;
  } else {
    return GradeType.F_Grade;
  }
}

const GradeType = {
  A_Grade: "A",
  B_Grade: "B",
  C_Grade: "C",
  D_Grade: "D",
  E_Grade: "E",
  F_Grade: "F",
};
Object.freeze(GradeType);

// for (const key in GradeType) {
//   if (GradeType.hasOwnProperty(key)) {
//     const element = GradeType[key];
//     console.log(element);
//   }
// }

module.exports = { computeGrade, GradeType, attendanceError, marksError };
