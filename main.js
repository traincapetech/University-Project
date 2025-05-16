document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
      const formData = { name, email, subject, message };
      try {
        const res = await fetch("http://localhost:3000/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          alert("Message sent successfully!");
          contactForm.reset();
        } else {
          const errorText = await res.text();
          alert("Error: " + errorText);
        }
      } catch (err) {
        console.error("Network error:", err);
        alert("Failed to send message. Please try again.");
      }
    });
  }

  const signupForm = document.querySelector("#signup form");
  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("signup-name").value.trim();
      const email = document.getElementById("signup-email").value.trim();
      const password = document.getElementById("signup-password").value.trim();
      try {
        const res = await fetch("http://localhost:3000/api/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password })
        });
        if (res.ok) {
          alert("Account created successfully!");
          signupForm.reset();
          window.location.href = "login.html";
        } else {
          const errorText = await res.text();
          alert("Signup failed: " + errorText);
        }
      } catch (err) {
        console.error("Network error:", err);
        alert("An error occurred. Please try again.");
      }
    });
  }

  const loginForm = document.querySelector("#login form");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value.trim();
      try {
        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });
        if (res.ok) {
          alert("Login successful!");
          loginForm.reset();
          window.location.href = "index.html"; 
        } else {
          const errorText = await res.text();
          alert("Login failed: " + errorText);
        }
      } catch (err) {
        console.error("Network error:", err);
        alert("An error occurred. Please try again.");
      }
    });
  }
});
