export default function appendToEachArrayValue(array, appendString) {
  const my_array = [];
  for (const i of array) {
    my_array.push(appendString + i);
  }

  return my_array;
}
