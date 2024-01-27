const loginForm = document.getElementById("loginform");
loginForm.addEventListener('submit', validateloginform);

function validateloginform(event) {
    event.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address');
        return;
    }

    if (!validatePassword(password.value)) {
        alert('Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
        return;
    }

    alert('Login successful');
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;
}