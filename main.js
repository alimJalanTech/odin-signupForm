function validate() {
    // Get the password and confirm password fields
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
  
    // Check if the passwords match
    if (password.value != confirmPassword.value) {
      alert("Passwords do not match!");
      return false;
    }
  
    // If the passwords match, allow the form to submit
    return true;
}
  