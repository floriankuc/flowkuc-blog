/** @jsx jsx */
import { jsx } from "@emotion/react"
import { PropsWithChildren, ReactElement, ReactNode } from "react"
import { mq } from "../utils/breakpoints"

const Container = ({
  children,
}: PropsWithChildren<ReactNode>): ReactElement => (
  <div
    css={{
      display: "flex",
      flexFlow: "column",
      margin: "0 auto",
      width: "90%",
      minHeight: "100%",
      [mq.md]: {
        width: "80%",
      },
      [mq.lg]: {
        width: "70%",
      },
      [mq.xl]: {
        width: "50%",
      },
    }}
  >
    {children}
  </div>
)

export default Container
