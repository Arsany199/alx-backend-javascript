export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsCity = students.filter((std) => std.location === city);
  return studentsCity.map((std) => {
    const filteredGrades = newGrades.filter((grade) => grade.studentId === std.id);
    if (filteredGrades.length > 0) {
      return {
        ...std,
        grade: filteredGrades[0].grade,
      };
    }
    return {
      ...std,
      grade: 'N/A',
    };
  });
}
