export default function getStudentsByLocation(std = getListStudents(), city) {
  return std.filter((std) => std.location === city);
}
