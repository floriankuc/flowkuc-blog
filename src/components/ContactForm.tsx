/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Form, Formik, FormikErrors } from "formik";
import React, { ReactElement, ReactNode, Ref } from "react";
import { FormValues } from "../pages";
import { theme } from "../styles/theme";
import { validationSchema } from "../utils/validationSchema";
import Button from "./Button";
import Input from "./Input";
import Email from "../icons/Email";
import { mqMax } from "../utils/breakpoints";

export interface ContactFormProps {
  sendEmail: (values: FormValues) => Promise<void>;
  isLoading: boolean;
  displayNotification: boolean;
}

const ContactForm = React.forwardRef(
  (
    { sendEmail, isLoading, displayNotification }: ContactFormProps,
    ref: Ref<HTMLFormElement>
  ): ReactElement => {
    const displayErrors = (errors: FormikErrors<FormValues>): ReactNode => (
      <div>
        {errors.email === "Invalid email format." && (
          <p className="error">{errors.email}</p>
        )}
        {Object.values(errors).some(
          err => err === "Your message is required"
        ) && <p className="error">Please complete all fields.</p>}
      </div>
    );

    const renderDisplayNotification = (): ReactElement => (
      <p
        css={css`
          color: ${theme.color.accent};
          font-weight: 700;
          margin-left: 20px;
          ${mqMax.sm} {
            margin-left: 0;
            margin-top: 20px;
          }
        `}
      >
        Thanks for your message!
      </p>
    );

    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          body: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values): Promise<void> => sendEmail(values)}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors }) => (
          <Form
            noValidate
            ref={ref}
            css={css`
              display: grid;
              justify-items: start;
              gap: 32px;
              margin: 52px 0;
            `}
          >
            <Input id="name" name="name" placeholder="You" />
            <Input
              id="email"
              name="email"
              placeholder="Your email"
              type="email"
            />
            <Input
              id="body"
              name="body"
              placeholder="Your message"
              as="textarea"
            />
            <div
              css={css`
                display: flex;
                align-items: center;

                ${mqMax.sm} {
                  flex-flow: column;
                  align-items: flex-start;
                }
              `}
            >
              <Button type="submit" loading={isLoading} icon={<Email />}>
                Send
              </Button>
              {displayNotification && renderDisplayNotification()}
            </div>
            {displayErrors(errors)}
          </Form>
        )}
      </Formik>
    );
  }
);

export default ContactForm;
