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

$(document).ready(function() {
  let visitorName;
  $("#formName").submit(function(event) {
    event.preventDefault();
    visitorName = $("#nameInput").val();
    $("#showName").text(visitorName);
    $("#formName").hide();
    $("#formNumber").fadeIn();
  })

  $("#formNumber").submit(function(event) {
    event.preventDefault();
    const number = $("#numberInput").val();
    beepBoop(number).forEach(function(element, index) {
      $("#result").append("<li>" + element + "</li>");
      $("#resultWithValues").append("<li>" + index + " => " + element + "</li>");
    })   
  })
})