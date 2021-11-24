/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { PropsWithChildren, ReactElement, ReactNode } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import { mq } from "../utils/breakpoints";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
/* margin: 0 auto; */
/* width: 90%;
      min-height: 100%;
      ${[mq.md]} {
        width: 80%;
      }
      ${[mq.lg]} {
        width: 70%;
      }
      ${[mq.xl]} {
        width: 60%;
      }
      ${[mq.xxl]} {
        width: 50%;
      }
      ${[mq.wow]} {
        width: 40%;
      } */
const Layout = ({
  children,
}: PropsWithChildren<{ children: ReactNode }>): ReactElement => (
  <>
    <GlobalStyles />
    <Container>
      {/* <div
      css={css`
        ${[mq.md]} {
          width: 80%;
        }
        ${[mq.lg]} {
          width: 70%;
        }
        ${[mq.xl]} {
          width: 60%;
        }
        ${[mq.xxl]} {
          width: 50%;
        }
        ${[mq.wow]} {
          width: 40%;
        }
      `}
    > */}
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
    {/* </div> */}
  </>
);

export default Layout;
