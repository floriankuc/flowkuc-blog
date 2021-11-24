/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { mq } from "../utils/breakpoints";

const Container = ({
  children,
}: PropsWithChildren<ReactNode>): ReactElement => (
  <div
    css={{
      padding: "0 20px",
      // background: "red",
      margin: "0 auto",

      [mq.md]: {
        width: "80%",
      },

      [mq.lg]: {
        width: "70%",
      },
      [mq.xl]: {
        width: "60%",
      },
      [mq.xxl]: {
        width: "50%",
      },
      [mq.wow]: {
        width: "40%",
      },
    }}
    // css={css`
    //   display: flex;
    //   flex-flow: column;
    //   margin: 0 auto;
    //   width: 90%;
    //   min-height: 100%;
    //   ${[mq.md]} {
    //     width: 80%;
    //   }
    //   ${[mq.lg]} {
    //     width: 70%;
    //   }
    //   ${[mq.xl]} {
    //     width: 60%;
    //   }
    //   ${[mq.xxl]} {
    //     width: 50%;
    //   }
    //   ${[mq.wow]} {
    //     width: 40%;
    //   }
    // `}
  >
    {children}
  </div>
);

export default Container;
