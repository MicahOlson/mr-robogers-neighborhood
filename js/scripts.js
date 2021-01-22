function beepBoop(input) {
  const number = parseInt(input);
  let sequence = [];
  for (let i = 0; i <= number; i++) {
    sequence.push(i);
  }
  for (let i = 0; i < sequence.length; i++) {
    for (const digit of ("" + sequence[i])) {
      if (digit === "3") {
        sequence[i] = "includesThree";
      } else if (digit === "2") {
        sequence[i] = "includesTwo";
      } else if (digit === "1") {
        sequence[i] = "includesOne";
      }
    }
  }
  return sequence;
}