/*Below Function chages the width of left and right section from home page
 *It also gives transition while going from Brand name display to home page
 */
function changeSize() {
  document.getElementsByClassName("left")[0].style.WebkitTransition =
    "width 2s";
  document.getElementsByClassName("left")[0].style.transition = "width 2s";
  document.getElementsByClassName("left")[0].style.width = "60%";
  document.getElementsByClassName("right")[0].style.width = "40%";
}
