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

const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting

  // get the input field values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comments = document.getElementById('input').value;

  // validate the input fields
  if (!name || !email || !comments) {
    alert('Please fill in all fields.');
    return;
  }

  // send the form data to the server using an HTTP request
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/submit-contact-form');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Thanks for contacting us!');
      form.reset();
    } else {
      alert('There was a problem submitting the form. Please try again later.');
    }
  };
  xhr.send(JSON.stringify({ name, email, comments }));
});


