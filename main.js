//NAV BAR AND TOP DIV FUNCTION
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
        document.getElementById("navigation-bar").style.visibility = "hidden";
  } else if (document.body.scrollTop < 0 || document.documentElement.scrollTop < 1) {
        document.getElementById("navigation-bar").style.top = "40px";
        document.getElementById("navigation-bar").style.visibility = "visible";
  } else {
        document.getElementById("navigation-bar").style.visibility = "visible";
        document.getElementById("navigation-bar").style.top = "0px";
  };

  prevScrollpos = currentScrollPos;
};
//END


//CONTACT PAGE FUNCTION
let form = document.getElementById("form");
let names = document.getElementById("name").value;
let email = document.getElementById("email").value;
let comment = document.getElementById("input").value;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted form");

  formValidation();
});

const formValidation = () => {
  if (!names || !email || !comment) {
    alert("Please fill in all fields.");
    return;
  } else {
    acceptData();
  }
};

let data = {};
let acceptData = () => {
  data["text"] = {names, email, comment};
  console.log(`Email: ${email}, Name: ${names}`);
  form.reset();
}



//END