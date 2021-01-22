function beepBoop(input) {
  let sequence = [];
  for (let i = 0; i <= parseInt(input); i++) {
    sequence.push(i);
  }
  for (let i = 0; i < sequence.length; i++) {
    let numberSet = [];
    for (const digit of ("" + sequence[i])) {
      numberSet.push(digit);
    }
    if (numberSet.includes("3")) {
      sequence[i] = "Won't you be my neighbor?";
    } else if (numberSet.includes("2")) {
      sequence[i] = "Boop!";
    } else if (numberSet.includes("1")) {
      sequence[i] = "Beep!";
    }
  }
  return sequence;
}