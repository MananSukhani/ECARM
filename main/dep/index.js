
function calculateScore() {
  var form = document.getElementById("form");
  var score1 = 0;
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (element.type === "radio" && element.checked) {
      score1 += parseInt(element.value);
    }
  }
  categorizeScore(score1);
}

 function categorizeScore(score1) {
        if (score1 >= 0 && score1 <= 7) {
          document.getElementById("result").innerHTML = "Score: " + score1 + "<br>Categorization: Normal";
        } else if (score1 >= 8 && score1 <= 13) {
          document.getElementById("result").innerHTML = "Score: " + score1 + "<br>Categorization: Mild depression";
        } else if (score1 >= 14 && score1 <= 18) {
          document.getElementById("result").innerHTML = "Score: " + score1 + "<br>Categorization: Moderate depression";
        } else if (score1 >= 19 && score1 <= 22) {
          document.getElementById("result").innerHTML = "Score: " + score1 + "<br>Categorization: Severe depression";
        } else if (score1 >= 23 && score1 <= 27) {
          document.getElementById("result").innerHTML = "Score: " + score1 + "<br>Categorization: Very severe depression";
        } else {
          document.getElementById("result").innerHTML = "Invalid score";
        }
      }