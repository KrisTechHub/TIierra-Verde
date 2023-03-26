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
const form = document.getElementById('submit');

submit.addEventListener('click', (event) => {
  event.preventDefault(); // prevent the form from submitting

  // get the input field values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comments = document.getElementById('input').value;

  // create an object with the form data
  const formData = { name, email, comments };

  // send the form data to the server using an HTTP request
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/submit-form');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response.message);
    } else {
      console.error('There was a problem submitting the form.');
    }
  };
  xhr.send(JSON.stringify(formData));
});
//END