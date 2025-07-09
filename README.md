# 🧾 Interactive Registration Form

This project is a client-side user registration form built with HTML, CSS, and JavaScript. It demonstrates real-time form validation, interactive password requirement feedback, and localStorage integration for persistent user experience.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Per-Scholas-Hassan-Razak/interactive-registration-form.git
cd interactive-registration-form
```

### 2. Open the Project

You can open `index.html` directly in your browser, or use **VS Code with Live Server** for real-time updates.

---

##  Features

- 📝 Form fields for **Username**, **Email**, **Password**, and **Confirm Password**
- ⚠️ Real-time validation using `input` events and the **Constraint Validation API**
- 🔐 Password strength indicator with live feedback on:
  - Length (8–15 characters)
  - Uppercase
  - Lowercase
  - Number
  - Special character
  - No spaces
- 💾 Uses `localStorage` to pre-fill username after successful registration
- 🧼 Custom error messages for clarity and better UX
- ❌ Prevents form submission unless all validations pass

---

## 📦 Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6)  
- `localStorage`  
- Constraint Validation API  

---

## 💡 Reflection

### ✅ How did `event.preventDefault()` help in handling form submission?

It stopped the form from submitting to the server right away, which gave me the chance to run custom validation before letting the form proceed.

---

### ✅ What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML5 validation (`required`, `pattern`, `minlength`, etc.) is built into the browser and catches basic errors, while JavaScript adds flexibility for custom rules and real-time feedback. Using both adds two layers of protection and improves user experience.

---

### ✅ Explain how you used `localStorage` to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

I saved the username with `localStorage.setItem()` after successful registration, and used `getItem()` on page load to pre-fill the `username` field. It’s useful for basic data like usernames, but it’s not secure enough for passwords or sensitive information.

---

### ✅ Describe a challenge you faced in implementing the real-time validation and how you solved it.

One challenge was updating the password requirement indicators in real time. I had to use regular expressions to check each rule (like `length`, `uppercase`, `lowercase`, `special character` etc.), and then toggle valid and invalid CSS classes for each box. I solved it by writing a helper function to manage the class changes. It took some fine-tuning to get everything working smoothly.

---

### ✅ How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

Each input field has a matching <span> for error messages. These are updated whenever the user types or submits the form, so feedback is shown right when it’s needed.

---

## 🧪 Testing Tips

- Try submitting with `blank` fields — each should show an error message.
- Try entering an invalid `email` like `test@` — you’ll see email validation in action.
- Type a weak password (like `test`) and watch the password strength boxes update.
- Submit `valid data`— you should see a `success alert`, and the `username` will be `saved`.
- Refresh the page — the `username` should appear `pre-filled` if saved previously.