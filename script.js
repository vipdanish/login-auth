
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Get the form values
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
  
//     // Simple validation (you can enhance this)
//     if (username === 'admin' && password === 'password') {
//       document.getElementById('message').textContent = 'Login successful!';
//       // Redirect to another page or perform additional actions
//     } else {
//       document.getElementById('message').textContent = 'Invalid username or password.';
//     }
//   });



  
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simple validation (you can enhance this)
  if (username === 'admin' && password === 'password') {
    document.getElementById('message').textContent = 'Login successful!';
     
    // Redirect to another page or perform additional actions
  } else {
    document.getElementById('message').textContent = 'Invalid username or password.';
  }
});
  




// js for the houver of header
// Add event listeners for hover effect on navbar links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.backgroundColor = '#555';
  });

  link.addEventListener('mouseleave', () => {
    link.style.backgroundColor = '';
  });
});
