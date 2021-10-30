import React, { Component } from "react"
import Footer from "./Footer"

export default class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

//todo emotion
//change the 'develop' command to "env-cmd -f .env.development gatsby develop"
