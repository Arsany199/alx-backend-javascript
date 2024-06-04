export default function cleanSet(set, startString) {
  const strings = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((i) => {
    if (typeof i === 'string' && i.startsWith(startString)) {
      strings.push(i.slice(startString.length));
    }
  });
  return strings.join('-');
}
