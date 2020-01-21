/*Intervals for changing text and revealing text animations*/
var lock = true;
var x = document.getElementsByClassName("disp");
setTimeout(function() {
  if (true) {
    x[0].style.display = "none";
    x[1].style.display = "block";
    lock = false;
    changeSize();
  }
}, 2000);
var count = 1;
var intv = setInterval(function() {
  if (lock == false) {
    nextInterval();
  }
}, 1000);
function nextInterval() {
  clearInterval(intv);
  setInterval(function() {
    if (count == 0) {
      document.getElementById("change").classList.remove("reveal");
      document.getElementById("change").innerHTML = "Single Application";
      count++;
    } else if (count == 1) {
      document.getElementById("change").classList.remove("reveal");
      document.getElementById("change").innerHTML = "Verified Avenues";
      count++;
    } else if (count == 2) {
      document.getElementById("change").classList.add("reveal");
      document.getElementById("change").innerHTML = "Trusted Advisor";
      count++;
    } else {
      document.getElementById("change").classList.remove("reveal");
      document.getElementById("change").innerHTML = "Informed Descision";
      count = 0;
    }
  }, 4000);
}
