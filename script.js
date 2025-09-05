// Part 1: Event Handling
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

clickBtn.addEventListener("click", () => {
  clickMessage.textContent = "🎉 You clicked the button!";
});

// Part 2: Interactive Elements
// Dark Mode Toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Feature
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Part 3: Form Validation
const form = document.getElementById("userForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success message
  if (isValid) {
    document.getElementById("successMessage").textContent =
      "✅ Form submitted successfully!";
    form.reset();
  } else {
    document.getElementById("successMessage").textContent = "";
  }
});
