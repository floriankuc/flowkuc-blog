import { Link } from "gatsby";
import React, { ReactElement } from "react";
import Head from "../components/Head";
import TechTags from "../components/TechTags";
import { OTHER_LINKS } from "../content/links";

const Home = (): ReactElement => {
  const { employer, stackshare } = OTHER_LINKS;

  return (
    <>
      <Head title="Home" />
      <h1>Hi, I'm Florian,</h1>
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
      {/* emailjs com here */}
    </>
  );
};

//Currently reading box
//currently learning box

export default Home;
