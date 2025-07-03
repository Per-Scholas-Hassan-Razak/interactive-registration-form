// INPUT FIELDS
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// REGISTRATION FORM
const registrationForm = document.getElementById("registrationForm");

// ERROR MESSAGE SPANS ELEMENTS
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");


// PASSWORD SPECIFIC FIELDS
const lengthReq = document.getElementById("lengthReq");
const uppercaseReq = document.getElementById("uppercaseReq");
const lowercaseReq = document.getElementById("lowercaseReq");
const numberReq = document.getElementById("numberReq");
const specialReq = document.getElementById("specialReq");
const noSpaceReq = document.getElementById("noSpaceReq");

// FUNCTIONS
function updateRequirement(element, isValid) {
  if (isValid) {
    element.classList.add("valid");
    element.classList.remove("invalid");
  } else {
    element.classList.add("invalid");
    element.classList.remove("valid");
  }
}

// EVENT LISTENERS
usernameInput.addEventListener("input", (event) => {
  const username = usernameInput.value.trim();
  if (username === "") {
    usernameError.textContent = "Username is required";
  } else if (!usernameInput.checkValidity()) {
    usernameError.textContent =
      "Username must not exceed 20 characters and must be alpha-numeric";
  } else {
    usernameError.textContent = "";
  }
});

emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  if (email === "") {
    emailError.textContent = "Email is required";
  } else if (!emailInput.checkValidity()) {
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.textContent = "";
  }
});

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;
  const lengthText = `${value.length} characters entered (8-15 required)`;

  if (value.length >= 8 && value.length <= 15) {
    lengthReq.textContent = `✅ ${lengthText}`;
    lengthReq.classList.add("valid");
    lengthReq.classList.remove("invalid");
  } else {
    lengthReq.textContent = `❌ ${lengthText}`;
    lengthReq.classList.add("invalid");
    lengthReq.classList.remove("valid");
  }

  updateRequirement(lengthReq, value.length >= 8 && value.length <= 15);
  updateRequirement(uppercaseReq, /[A-Z]/.test(value));
  updateRequirement(lowercaseReq, /[a-z]/.test(value));
  updateRequirement(numberReq, /\d/.test(value));
  updateRequirement(specialReq, /[^A-Za-z0-9\s]/.test(value));
  updateRequirement(noSpaceReq, /^\S+$/.test(value));
});

confirmPasswordInput.addEventListener("input", () => {
  if (confirmPasswordInput.value === "") {
    confirmPasswordError.textContent = "";
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
  } else {
    confirmPasswordError.textContent = "";
  }
});

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Username check
  if (username === "") {
    usernameError.textContent = "Username is required";
    isValid = false;
  } else if (!usernameInput.checkValidity()) {
    usernameError.textContent =
      "Username must not exceed 20 characters and must be alpha-numeric";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  // Email check
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailInput.checkValidity()) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password check
  if (password === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (!passwordInput.checkValidity()) {
    passwordError.textContent = "Password does not meet the requirements";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Confirm Password check
  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Please confirm your password";
    isValid = false;
  } else if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match";
    isValid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  if (isValid) {
    alert("Registration successful!");
    localStorage.setItem("username", username);
    registrationForm.reset();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    usernameInput.value = savedUsername;
  }
});
