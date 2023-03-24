//NAV BAR AND TOP DIV FUNCTION
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("navigation-bar").style.visibility = "hidden";
  } else if (document.body.scrollTop < 0 || document.documentElement.scrollTop < 10) {
    document.getElementById("navigation-bar").style.top = "40px";
    document.getElementById("navigation-bar").style.visibility = "visible";

  } else {
    document.getElementById("navigation-bar").style.visibility = "visible";
    document.getElementById("navigation-bar").style.top = "0px";
  };

  prevScrollpos = currentScrollPos;
}
//END



