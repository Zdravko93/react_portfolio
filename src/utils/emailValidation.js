export async function verifyEmailWithMailboxLayer(email) {
  const trimmedEmail = email.trim(); // trim whitespace

  if (!trimmedEmail || !trimmedEmail.includes("@")) {
    return {
      success: false,
      reason: "Invalid email format.",
    };
  }

  const accessKey = process.env.REACT_APP_MAILBOXLAYER_API_KEY;

  const url = `https://apilayer.net/api/check?access_key=${accessKey}&email=${encodeURIComponent(
    trimmedEmail
  )}&smtp=1&format=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const isValid =
      data.format_valid &&
      data.mx_found &&
      (!data.disposable || data.disposable === false);

    // Since smtp=1 always, just check smtp_check directly
    const smtpSafe = data.smtp_check;

    // Check if it's a valid, deliverable, non-disposable email
    return {
      success: isValid && smtpSafe,
      reason: data.did_you_mean
        ? `Did you mean ${data.did_you_mean}?`
        : data.error?.info || "Invalid or undeliverable email.",
    };
  } catch (error) {
    console.error("Email validation failed:", error);
    return { success: false, reason: "Could not validate email at this time." };
  }
}
