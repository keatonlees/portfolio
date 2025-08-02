export const handleLink = (url: string | null) => {
  if (!url) return;
  window.open(url, "_blank", "noreferrer")?.focus();
};

export const handleEmail = (email: string | null) => {
  if (!email) return;
  window.open(`mailto:${email}`)?.focus();
};

export const sanitizeName = (name: string) => {
  return name
    .toLowerCase()
    .replace(".", "")
    .replace("-", "")
    .replace(" ", "_")
    .replace("#", "sharp");
};
