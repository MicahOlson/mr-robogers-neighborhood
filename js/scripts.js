function beepBoop(numberAsString) {
  let sequence = [];
  for (let i = 0; i <= parseInt(numberAsString); i++) {
    let digits = [];
    for (const digit of ("" + i)) {
      digits.push(digit);
    }
    if (digits.includes("3")) {
      sequence.push("Won't you be my neighbor?");
    } else if (digits.includes("2")) {
      sequence.push("Boop!");
    } else if (digits.includes("1")) {
      sequence.push("Beep!");
    } else {
      sequence.push(i);
    }
  }
  return sequence;
}