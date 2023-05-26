//contact me button

function thankYouMessage(event) {
  event.preventDefault();
  const form = event.target.form;
  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out the form.");
  } else if (!emailCheck.test(email)) {
    alert("Please enter a valid email address");
  } else {
    alert("Thank you for contacting me! I'll get back to you soon!");
    form.reset();
  }
}
