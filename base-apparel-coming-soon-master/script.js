//Grab the form and put into a variable
const form = document.getElementById('form');
//Grab the email and put into a variable
const email = document.getElementById('email');

//addEventListener to the form
form.addEventListener('submit', e => {
  e.preventDefault();
  const emailVal = email.value;

//check if its a valid email
if (!validateEmail(emailVal)) {
  form.classList.add('error');
} else {
  form.classList.remove('error');
  document.body.innerHTML = `<h1>Thank you!</h1>`;
}
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

