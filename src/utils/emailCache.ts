export const isEmailCached = (email: string): boolean => {
  return localStorage.getItem(`validated_email:${email}`) === "true";
};

export const cacheValidEmail = (email: string): void => {
  localStorage.setItem(`validated_email:${email}`, "true");
};
