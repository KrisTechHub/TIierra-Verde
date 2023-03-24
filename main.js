//NAV BAR AND TOP DIV FUNCTION
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("navigation-bar").style.visibility = "hidden";
  } else {
    document.getElementById("navigation-bar").style.visibility = "visible";
    document.getElementById("navigation-bar").style.top = "0px";
  };

  prevScrollpos = currentScrollPos;
}
//END