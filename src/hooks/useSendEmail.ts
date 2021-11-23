import { send } from "emailjs-com";
import { Dispatch, SetStateAction, useState } from "react";
import { FormValues } from "../pages";

export type SendEmailApi = {
  sendEmail: (values: FormValues) => Promise<void>;
  isLoading: boolean;
  error: unknown;
  isSuccess: boolean;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
};

export const useSendEmail = (): SendEmailApi => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<unknown>();

  const sendEmail = async (values: FormValues): Promise<void> => {
    setIsLoading(true);
    try {
      const res = await send(
        process.env.GATSBY_EMAIL_RECEIVER as string,
        process.env.GATSBY_EMAIL_TEMPLATEID as string,
        values,
        process.env.GATSBY_EMAIL_USERID as string
      );
      if (res.status === 200) {
        setIsSuccess(true);
      }
    } catch (err) {
      setError(error);
    }
    setIsLoading(false);
  };

  return { sendEmail, isLoading, error, isSuccess, setIsSuccess };
};
