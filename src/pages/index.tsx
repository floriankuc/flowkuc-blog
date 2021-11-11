import { Link } from "gatsby"
import React, { ReactElement } from "react"
import Head from "../components/Head"
import Layout from "../components/Layout"

export default function Home(): ReactElement {
  return (
    <Layout>
      <Head title="Home" />
      home
    </Layout>
  )
}