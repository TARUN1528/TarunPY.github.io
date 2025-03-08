document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email && password) {
        alert('Login successful! (This is a demo)');
        // Add your login logic here
    } else {
        alert('Please fill in all fields.');
    }
});

// Add a subtle animation on input focus
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s';
    });
    input.addEventListener('blur', function() {
        this.style.transform = 'scale(1)';
    });
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = document.querySelector('input[type="text"]:nth-child(1)').value;
    const lastName = document.querySelector('input[type="text"]:nth-child(2)').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const terms = document.querySelector('input[name="terms"]').checked;

    if (firstName && lastName && email && password && terms) {
        alert('Sign up successful! (This is a demo)');
        // Add your sign-up logic here
    } else {
        alert('Please fill in all fields and agree to the Terms of Service and Privacy Policy.');
    }
});

// Add a subtle animation on input focus
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s';
    });
    input.addEventListener('blur', function() {
        this.style.transform = 'scale(1)';
    });
});