const form = document.querySelector('form'),
  emailField = form.querySelector('.email-field'),
  emailInput = emailField.querySelector('.email'),
  passwordField = form.querySelector('.create-password'),
  passwordInput = passwordField.querySelector('.password'),
  cPassField = form.querySelector('.confirm-password'),
  cPassInput = cPassField.querySelector('.cPassword')

// Email Validation 
const checkEmail = () => {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  if (!emailInput.value.match(emailPattern)) {
    return emailField.classList.add("invalid")
  }
  emailField.classList.remove("invalid")
}

// Hide and show Password
const eyeIcons = document.querySelectorAll('.show-hide')
eyeIcons.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    // getting parent element of eye icon and selecting the password input
    const pInput = eyeIcon.parentElement.querySelector("input")
    if (pInput.type === "password") {
      eyeIcon.classList.replace("uil-eye", "uil-eye-slash") //change eye icon 
      return pInput.type = "text"
    }
    eyeIcon.classList.replace("uil-eye-slash", "uil-eye") //change eye icon 
    pInput.type = "password"
  })
})

// Password Validation
const createPass = () => {
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  if (!passwordInput.value.match(passPattern)) {
    return passwordField.classList.add("invalid")
  }
  passwordField.classList.remove("invalid")
}
// Confirm Password Validation
const confirmPass = () => {
  if (passwordInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid")
  }
  cPassField.classList.remove("invalid")
}


// Calling function on form submit
form.addEventListener("submit", (e) => {
  e.preventDefault()
  checkEmail()
  createPass()
  confirmPass()

  emailInput.addEventListener("keyup", checkEmail)
  passwordInput.addEventListener("keyup", createPass)
  cPassInput.addEventListener("keyup", confirmPass)

  if (
    !emailField.classList.contains("invalid") &&
    !passwordField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action")
  }
})