import type { ContactFormValues, ContactFormErrors } from "../types/form";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}
