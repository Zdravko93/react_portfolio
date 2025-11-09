export const isEmailCached = (email) => {
  return localStorage.getItem(`validated_email:${email}`) === "true";
};

export const cacheValidEmail = (email) => {
  localStorage.setItem(`validated_email:${email}`, "true");
};
