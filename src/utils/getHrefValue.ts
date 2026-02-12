export const getHrefValue = (items: { type: string; value: string }[]) => {
    return items.map((item) => {
      switch (item.type) {
        case "phone":
          return `tel:${item.value}`;
        case "email":
          return `mailto:${item.value}`;
        case "whatsapp":
          return item.value;
        default:
          return item.value;
      }
    }
    )?.[0];
  };

  export const getWhatsAppLink = (
    phone: string,
    message?: string
  ): string => {
    const baseUrl = "https://wa.me/";
    const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : "";
    return `${baseUrl}${phone}${encodedMessage}`;
  };
