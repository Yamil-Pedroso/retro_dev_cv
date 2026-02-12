import emailjs from "@emailjs/browser";

export const sendEmail = (form: HTMLFormElement) => {
  return emailjs.sendForm(
    "your_service_id",
    "your_template_id",
    form,
    "wgFMzTokY5m77L82p"
  );
};
