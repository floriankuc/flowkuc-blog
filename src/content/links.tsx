import React, { ReactNode } from "react"
import Github from "../icons/Github"
import Linkedin from "../icons/LinkedIn"
import Xing from "../icons/Xing"

export interface LinkType {
  icon?: ReactNode
  title: string
  to: string
}

export type OtherLinks = "stackshare" | "employer"

export const NAVLINKS: LinkType[] = [
  { to: "/", title: "Home" },
  { to: "/blog", title: "Blog" },
  { to: "/projects", title: "Projects" },
]

export const FOOTERLINKS: LinkType[] = [
  {
    to: "https://www.xing.com/profile/Florian_Kuc",
    icon: <Xing />,
    title: "xing",
  },
  { to: "https://github.com/floriankuc", icon: <Github />, title: "Github" },
  {
    to: "https://www.linkedin.com/in/floriankuc/",
    icon: <Linkedin />,
    title: "LinkedIn",
  },
]

export const OTHER_LINKS: Record<OtherLinks, LinkType> = {
  stackshare: {
    to: "https://stackshare.io/floriankuc/my-stack",
    title: "Stackshare",
  },
  employer: {
    to: "https://www.booking-time.com/",
    title: "Bookingtime",
  },
}
