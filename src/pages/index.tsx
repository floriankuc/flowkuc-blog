import { send } from "emailjs-com";
import { Form, Formik, FormikErrors } from "formik";
import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../components/Button";
import Head from "../components/Head";
import TechTags from "../components/TechTags";
import { OTHER_LINKS } from "../content/links";
import { validationSchema } from "../utils/validationSchema";
import Email from "../icons/Email";
import Input from "../components/Input";
import { theme } from "../styles/theme";

export interface FormValues extends Record<string, string> {
  name: string;
  email: string;
  body: string;
}

const Home = (): ReactElement => {
  const { employer, stackshare } = OTHER_LINKS;
  const formRef = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<unknown>();
  const [displayNotification, setDisplayNotification] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setDisplayNotification(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    console.log(displayNotification);
    if (displayNotification) {
      setTimeout(() => {
        setIsSuccess(false);
        setDisplayNotification(false);
      }, 2000);
    }
  }, [displayNotification]);

  const sendEmail = async (values: FormValues) => {
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
        if (formRef.current) {
          formRef.current.reset();
        }
      }
      console.log(res);
    } catch (err) {
      setError(error);
      console.log(err);
    }
    setIsLoading(false);
  };

  const displayErrors = (errors: FormikErrors<FormValues>): ReactNode => {
    return (
      <div>
        {errors.email === "Invalid email format." && (
          <p className="error">{errors.email}</p>
        )}
        {Object.values(errors).some(
          err => err === "Your message is required"
        ) && <p className="error">Please complete all fields.</p>}
        {console.log(Object.values(errors))}
      </div>
    );
  };

  return (
    <>
      <Head title="Home" />
      <h1>Hi, I'm Florian</h1>
      <p>
        a web dev based in Hamburg, Germany. I enjoy creating and maintaining
        web applications and websites. Furthermore, I am an avid learner and
        always looking into new technologies that catch my attention. I am
        currently working on various front end related projects at{" "}
        <a href={employer.to}>Bookingtime</a> on a daily basis. Main
        technologies I work with are:
      </p>
      <TechTags />
      <p>
        A more detailed breakdown of my stack can be found on{" "}
        <a href={stackshare.to}>{stackshare.title}</a>.
      </p>
      <hr />
      <h2 style={{ fontWeight: 900, fontSize: "2rem", marginBottom: 32 }}>
        Get in touch
      </h2>
      <p>
        I'd be delighted to hear from you regarding open source projects or
        business opportunities. Just drop me a line.
      </p>

      {/* toast wenn message sent */}
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
        // onSubmit={async (values, { resetForm }) => {
        //   // const res: EmailJSResponseStatus = await sendEmail(
        //   //   values.name,
        //   //   values.email,
        //   //   values.body
        //   // );
        //   // console.log("res", res);
        //   // (res.status === 200 && handleMessageSuccess()) ||
        //   // handleMessageError(res);
        //   resetForm();
        // }}
      >
        {({ values, errors, isSubmitting, resetForm }) => (
          <Form
            noValidate
            ref={formRef}
            style={{
              display: "grid",
              justifyItems: "start",
              gap: "32px",
              margin: "52px 0",
            }}
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
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button type="submit" loading={isLoading} icon={<Email />}>
                Send
              </Button>
              {displayNotification && (
                <p
                  style={{
                    color: theme.color.accent,
                    fontWeight: 700,
                    marginLeft: 20,
                  }}
                >
                  Thanks for your message!
                </p>
              )}
            </div>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
            {displayErrors(errors)}
          </Form>
        )}
      </Formik>
    </>
  );
};

//Currently reading box
//currently learning box

export default Home;
