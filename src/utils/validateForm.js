const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateForm({ name, email, message }) {
  const errors = {};

  if (!name.trim()) {
    errors.name = "Name is required.";
  }

  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email adress.";
  }

  if (!message.trim()) {
    errors.message = "Message is required.";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}
