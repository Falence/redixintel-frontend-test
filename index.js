const form = document.querySelector('.form');
const name = document.getElementById('name');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    name: name.value,
    email: email.value,
  }

  const api = 'https://redixintel-backend.herokuapp.com/email';
  const xhr = new XMLHttpRequest();
  xhr.open('POST', api);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function() {
    console.log(xhr.responseText);
    if (xhr.responseText === 'success') {
      alert(`Hey ${name.value}, we've sent an email to ${email.value}.`);
      name.value = '';
      email.value = '';
    } else if (xhr.responseText === 'exists') {
      alert(`The email: ${email.value} has already been taken`);
    } else {
      alert('Hmmmm! Something went wrong. Relax it not your fault!');
    }
  }
  xhr.send(JSON.stringify(data));
})