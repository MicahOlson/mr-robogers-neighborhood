function beepBoop(input) {
  const number = parseInt(input);
  let sequence = [];
  for (let i = 0; i <= number; i++) {
    sequence.push(i);
  }
  return sequence;
}