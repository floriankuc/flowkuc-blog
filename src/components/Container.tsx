/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { mq } from "../utils/breakpoints";

const Container = ({
  children,
}: PropsWithChildren<ReactNode>): ReactElement => (
  <div
    css={{
      margin: "0 auto",
      width: "90%",
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
  >
    {children}
  </div>
);

export default Container;
