function calculateNumber(type, a, b) {
  if (type === SUM) {
    return math.round(a) + math.round(b);
  }
  if (type === SUBTRACT) {
    return math.round(a) - math.round(b);
  }
  if (type === DIVIDE) {
    if (math.round(b) === 0) {
      return 'Error';
    }
    return math.round(a) / math.round(b);
  }
}

module.exports = calculateNumber;
