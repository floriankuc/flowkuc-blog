/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { mq } from "../utils/breakpoints";

const Container = ({
  children,
}: PropsWithChildren<ReactNode>): ReactElement => (
  <div
    css={{
      marginLeft: "auto",
      marginRight: "auto",
      width: "90vw",
      [mq.md]: {
        width: "80vw",
      },

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
    {children}
  </div>
);

export default Container;
