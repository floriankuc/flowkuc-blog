import React, { PropsWithChildren, ReactElement, ReactNode } from "react"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"

const Layout = ({
  children,
}: PropsWithChildren<{ children: ReactNode }>): ReactElement => {
  return (
    <>
      <GlobalStyles />
      {children}
      <Footer />
    </>
  )
}

export default Layout

//change the 'develop' command to "env-cmd -f .env.development gatsby develop"
