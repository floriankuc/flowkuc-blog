/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { PropsWithChildren, ReactElement, ReactNode } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Container2 from "./Container2";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  children,
}: PropsWithChildren<{ children: ReactNode }>): ReactElement => (
  <>
    <GlobalStyles />
    <Container2>
      {/* <div style={{ padding: 200 }}> */}
      <Header />
      <main
        css={css`
          padding: 50px 0;
          flex: 1;
          min-height: calc(100vh - 200px);
        `}
      >
        {children}
      </main>
      <Footer />
      {/* </div> */}
    </Container2>
  </>
);

export default Layout;
