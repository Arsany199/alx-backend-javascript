export default function getListStudentIds(myarr) {
  let newarr = [];
  if (myarr instanceof Array) {
    newarr = myarr.map((student) => student.id);
  }

  return newarr;
}
