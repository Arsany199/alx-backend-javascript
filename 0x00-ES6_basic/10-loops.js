export default function appendToEachArrayValue(array, appendString) {
  const myarray = [];
  for (const i of array) {
    myarray.push(appendString + i);
  }

  return myarray;
}
