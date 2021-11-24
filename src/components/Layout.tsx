/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { PropsWithChildren, ReactElement, ReactNode } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import { mq } from "../utils/breakpoints";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  children,
}: PropsWithChildren<{ children: ReactNode }>): ReactElement => (
  <>
    <GlobalStyles />
    {/* <Container> */}
    <div
      css={{
        // marginLeft: "auto",
        // marginRight: "auto",
        width: "70%",
        // [mq.md]: {
        //   width: "80%",
        // },

        // [mq.lg]: {
        //   width: "70%",
        // },
        // [mq.xl]: {
        //   width: "60%",
        // },
        // [mq.xxl]: {
        //   width: "50%",
        // },
        // [mq.wow]: {
        //   width: "40%",
        // },
      }}
    >
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
    </div>
    {/* </Container> */}
  </>
);

export default Layout;
