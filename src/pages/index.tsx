/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import ContactForm from "../components/ContactForm";
import TechTags from "../components/TechTags";
import { OTHER_LINKS } from "../content/links";
import { useSendEmail } from "../hooks/useSendEmail";
import Seo from "./Seo";

export interface FormValues extends Record<string, string> {
  name: string;
  email: string;
  body: string;
}

const Home = (): ReactElement => {
  const { employer, stackshare } = OTHER_LINKS;
  const formRef = useRef<HTMLFormElement>(null);

  const { sendEmail, isSuccess, isLoading, setIsSuccess } = useSendEmail();
  const [displayNotification, setDisplayNotification] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      formRef.current?.reset();
      setDisplayNotification(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (displayNotification) {
      setTimeout(() => {
        setIsSuccess(false);
        setDisplayNotification(false);
      }, 2000);
    }
  }, [displayNotification]);

  return (
    <>
      <Seo title="Home" />
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
      <h2>Get in touch</h2>
      <p>
        I'd be delighted to hear from you regarding open source projects or
        business opportunities. Just drop me a line.
      </p>
      <ContactForm
        sendEmail={sendEmail}
        isLoading={isLoading}
        displayNotification={displayNotification}
        ref={formRef}
      />
    </>
  );
};

export default Home;
