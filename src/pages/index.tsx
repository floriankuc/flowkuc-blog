import React, { ReactElement } from "react";
import Head from "../components/Head";
import TechTags from "../components/TechTags";
import { OTHER_LINKS } from "../content/links";

const Home = (): ReactElement => {
  const { employer, stackshare } = OTHER_LINKS;

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
        I'd be delighted to hear from you regarding open source projects,
        business opportunities or feedback on my articles (especially if you
        know better!). Just drop me a line.
      </p>

      {/* emailjs com here, von floriankuc nehmen inkl. modal für box, validation, form etc */}
      {/* <Modal
            isOpen={messageShow}
            onRequestClose={closeModal}
            style={modalStyles}
          >
            <p>Message sent</p>
            <Button onClick={closeModal}>Nice</Button>
          </Modal> */}
    </>
  );
};

//Currently reading box
//currently learning box

export default Home;
