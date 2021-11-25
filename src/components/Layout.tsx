/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { PropsWithChildren, ReactElement, ReactNode } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  children,
}: PropsWithChildren<{ children: ReactNode }>): ReactElement => (
  <div>
    <GlobalStyles />
    <Container>
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
    </Container>
  </div>
);

export default Layout;
