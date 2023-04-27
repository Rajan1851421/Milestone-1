const validateForm =(event)=>{
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    // Check email format
    if (!emailInput.value.includes('@')) {
      errorMessage.innerHTML = 'Invalid email or password!';
      return;
    }

    // Check password length
    if (passwordInput.value.length < 8) {
      errorMessage.innerHTML = 'Invalid email or password!';
      return;
    }

    // Clear error message and display success message
    errorMessage.innerHTML = '';
    successMessage.innerHTML = 'Valid email and password!';
}