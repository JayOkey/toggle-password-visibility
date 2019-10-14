const form = document.querySelector('form');

const togglePassword = function(element) {
  form.password.type = (element.checked) ? 'text' : 'password';
};

form.addEventListener('click', function(event) {
  if (event.target.id === 'show-password') {
    togglePassword(event.target);
  }
}, false);