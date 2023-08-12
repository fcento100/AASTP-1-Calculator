//if you are reading this hello! I made this to learn about HTML/CSS/JS, use at your own risk.
function updateCalcs() {
  var Q = document.getElementById("Q").value;

  //bd1
  if (1 <= Q && Q < 30_000) {
    document.getElementById("BD1").innerHTML = (
      0.35 * Math.pow(Q, 1 / 3)
    ).toFixed(2);
  } else if (30_000 <= Q && Q <= 120_000) {
    document.getElementById("BD1").innerHTML = (
      0.44 * Math.pow(Q, 1 / 3)
    ).toFixed(2);
  } else {
    document.getElementById("BD1").innerHTML = "N/A";
  }

  //bd2
  if (1 <= Q && Q < 1_500) {
    document.getElementById("BD2").innerHTML = (
      0.4 * Math.pow(Q, 1 / 3)
    ).toFixed(2);
  } else if (1_500 <= Q && Q <= 500_000) {
    document.getElementById("BD2").innerHTML = (
      0.6 * Math.pow(Q, 1 / 3)
    ).toFixed(2);
  } else {
    document.getElementById("BD2").innerHTML = "N/A";
  }

  //bd6
  if (1 <= Q && Q <= 500_000) {
    document.getElementById("BD6").innerHTML = (
      1.2 * Math.pow(Q, 1 / 3)
    ).toFixed(2);
  } else {
    document.getElementById("BD6").innerHTML = "N/A";
  }
}
