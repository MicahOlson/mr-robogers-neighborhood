function beepBoop(numberAsString, name) {
  let sequence = [];
  for (let i = 0; i <= parseInt(numberAsString); i++) {
    let digits = [];
    for (const digit of ("" + i)) {
      digits.push(digit);
    }
    if (digits.includes("3")) {
      sequence.push("Won't you be my neighbor, " + name +  "?");
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

  let resultArray;
  $("#formNumber").submit(function(event) {
    event.preventDefault();
    const number = $("#numberInput").val();
    $("#hint").fadeIn();

    resultArray = beepBoop(number, visitorName);

    resultArray.forEach(function(element, index) {
      $("#result").append("<li>" + element + "</li>");
      $("#resultWithValues").append("<li>" + index + " => " + element + "</li>");
    })   
  })
  $("#hintReveal").click(function() {
    $("#result").hide();
    $("#resultWithValues").fadeIn();
    $("#reverseOption").fadeIn();
  })
  $("#reorder").click(function() {
    $("li").remove();
    resultArray.reverse().forEach(function(element) {
      $("#resultWithValues").append("<li>" + element + "</li>");
    }) 
    $("#newNumber").fadeIn();
  })

  $("#clear").click(function() {
    $("#formNumber")[0].reset();
    $("li").remove();
    $("#resultWithValues").hide();
    $("#result").show();
  })
})