function beepBoop(number, name) {
  let sequence = [];
  for (let i = 0; i <= number; i++) {
    let digits = [];
    for (const digit of ("" + i)) {
      digits.push(digit);
    }
    if (digits.includes("3")) {
      sequence.push("Won't you be my neighbor, " + name + "?");
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
  });

  let sequenceArray;
  $("#formNumber").submit(function(event) {
    event.preventDefault();
    $("li").remove();
    const userNumber = parseInt($("#numberInput").val());
    if (isNaN(userNumber) || userNumber < 1) {
      alert("Oops, please check that your number is a positive integer.");
    } else {
      $("#hint").fadeIn(3000);
      sequenceArray = beepBoop(userNumber, visitorName);
      sequenceArray.forEach(function(element, index) {
        $("#result").append("<li>" + element + "</li>");
        $("#resultWithValues").append("<li>" + index + " => " + element + "</li>");
      })
    }
  });

  $("#hintReveal").click(function() {
    $("#result").toggle();
    $("#resultWithValues").toggle();
    $("#reverseOption").fadeIn(3000);
  });

  $("#reorder").click(function() {
    $("#resultWithValues").hide();
    $("ul#result li").remove()
    sequenceArray.reverse().forEach(function(element) {
      $("#result").append("<li>" + element + "</li>");
    })
    $("#result").show();
    $("#enterNewNumber").fadeIn(3000);
  });

  $("#clear").click(function() {
    $("#formNumber")[0].reset();
    $("li").remove();
    $("#resultWithValues").hide();
    $("#result").show();
    $("#giveUp").fadeIn(3000);
  });

  $("#answerReveal").click(function() {
    $('#answer').slideDown();
  });
});