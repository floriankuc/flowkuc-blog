import React, { PropsWithChildren, ReactElement, ReactNode } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  children,
}: PropsWithChildren<{ children: ReactNode }>): ReactElement => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <main
          style={{
            padding: "50px 0",
            flex: 1,
            minHeight: "calc(100vh - 200px)",
          }}
        >
          {children}
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

//change the 'develop' command to "env-cmd -f .env.development gatsby develop"
