var form = document.querySelector('.create-account');
var submitButton = document.querySelector('.submit-form');

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); 

  var nameInput = document.getElementById('input-name').value;
  var passwordInput = document.getElementById('input-password').value;
  var confirmPasswordInput = document.getElementById('input-confirm-password').value;
  var monthInput = document.getElementById('select-month').value;
  var dayInput = document.getElementById('select-day').value;
  var yearInput = document.getElementById('select-year').value;

  if (nameInput === '') {
    alert('Please enter your name.');
    return;
  }

  if (nameInput.length < 3) {
    alert('Name must have at least 3 characters.');
    return;
  }

  if (passwordInput === '') {
    alert('Please enter your password.');
    return;
  }

  if (!/\d/.test(passwordInput)) {
    alert('Password must contain at least one digit.');
    return;
  }

  if (confirmPasswordInput === '') {
    alert('Please confirm your password.');
    return;
  }

  if (passwordInput !== confirmPasswordInput) {
    alert('Password not match. Please Try Again!');
    return;
  }

  if (monthInput === 'Month' || dayInput === 'Day' || yearInput === 'Year') {
    alert('Please select your date of birth.');
    return;
  }

  if (document.querySelector('input[name="gender"]:checked') === null) {
    alert('Please select your gender.');
    return;
  }

  if (!document.getElementById('input-term-conditions').checked) {
    alert('Please agree to the terms and conditions.');
    return;
  }

  form.submit();
});




