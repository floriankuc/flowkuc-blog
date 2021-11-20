import emailjs, { EmailJSResponseStatus } from "emailjs-com";

export const sendEmail = (
  name: string,
  email: string,
  message: string
): Promise<EmailJSResponseStatus> => {
  return emailjs.send(
    process.env.GATSBY_EMAIL_RECEIVER as string,
    process.env.GATSBY_EMAIL_TEMPLATEID as string,
    {
      name,
      email,
      message,
    },
    process.env.GATSBY_EMAIL_USERID
  );
};
