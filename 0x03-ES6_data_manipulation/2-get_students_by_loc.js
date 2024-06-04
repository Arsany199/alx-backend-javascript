export default function getStudentsByLocation(std, city) {
  return std.filter((std) => std.location === city);
}
