const normalizePhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/\D/g, "");
};

export const buildWhatsappLink = (phoneNumber: string, message: string) => {
  const normalizedPhone = normalizePhoneNumber(phoneNumber);
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${normalizedPhone}?text=${encodedMessage}`;
};

export const buildPhoneLink = (phoneNumber: string) => {
  const normalizedPhone = normalizePhoneNumber(phoneNumber);

  return `tel:+${normalizedPhone}`;
};
