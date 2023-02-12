import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('button[type="submit"]');

// Track input events on the form
form.addEventListener('input', _.throttle(function() {
  // Write an object with email and message fields to a local repository
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: emailInput.value,
      message: messageInput.value
    })
  );
}, 500));

// Check state of repository when page loads
const storedData = localStorage.getItem('feedback-form-state');
if (storedData) {
  // Fill form fields with stored data
  const data = JSON.parse(storedData);
  emailInput.value = data.email;
  messageInput.value = data.message;
}

// Submit form
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Output an object with email, message fields and their current values to the console
  console.log({
    email: emailInput.value,
    message: messageInput.value
  });

  // Empty the repository and form fields
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});

